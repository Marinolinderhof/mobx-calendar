import { extendObservable, computed, useStrict, action, autorun } from 'mobx';
import { moment } from 'utils';
import Appointment from './appointment';
import { columnHelper } from 'utils';
import { storage } from 'utils';

useStrict(true);

class CalendarStore {
  constructor() {
    extendObservable(this, {
      appointments: this.load(),
      range: moment(),
      getSortedAppointments: computed(() =>
        this.appointments.sort((a, b) => a.start - b.start)
      ),
      toJson: computed(() => {
        return this.getDayAppointments.map(x => x.toJS());
      }),
      getDayAppointments: computed(() =>
        this.getSortedAppointments.filter(appointment =>
          moment(appointment.start).isSame(this.range, 'day')
        )
      ),
      columnsOfDayAppointments: computed(() => {
        let totalColumns = 0;
        const columnArray = this.getDayAppointments.reduce((acc, current) => {
          const { column } = columnHelper(current.start, acc);
          totalColumns = column > totalColumns ? column : totalColumns;
          acc.push({
            id: current.id,
            end: current.end,
            column
          });
          return acc;
        }, []);

        // transform columnArray to an object that is easier to look up
        const columns = columnArray.reduce((acc, rec) => {
          acc[rec.id] = rec.column;
          return acc;
        }, {});

        return { columns, totalColumns: totalColumns + 1 };
      })
    });

    this.addAppointment = action(
      'addAppointment',
      ({ title, start, end, desc }) =>
        this.appointments.push(
          new Appointment(this, { title, start, end, desc })
        )
    );

    this.persist();
  }

  findAppointment(id) {
    return this.appointments.find(appointment => appointment.id === id);
  }

  findColumnAppointment(id) {
    return this.columnsOfDayAppointments.columns[id];
  }

  getTotalColumns() {
    return this.columnsOfDayAppointments.totalColumns;
  }

  getSiblings({ end, start }) {
    return this.getDayAppointments.filter(x => {
      if (
        moment(end).isSameOrAfter(x.start) &&
        moment(start).isSameOrBefore(x.end)
      ) {
        return true;
      }
      return false;
    });
  }

  getAppointmentStyle(id) {
    const myColumn = this.findColumnAppointment(id);
    const totalColumns = this.getTotalColumns();
    const myAppointment = this.findAppointment(id);
    const siblings = this.getSiblings(myAppointment);

    const width =
      totalColumns - (siblings.length - 1) < 1
        ? 1
        : totalColumns - (siblings.length - 1);

    return {
      offset: myColumn / totalColumns * 100,
      width: width / totalColumns * 100,
      height: moment(myAppointment.end).diff(
        moment(myAppointment.start),
        'minutes',
        true
      ),
      top: moment
        .duration(moment(myAppointment.start).format('H:mm'))
        .asMinutes()
    };
  }

  load() {
    const rawAppointments = storage.get('CalendarStore') || [];
    return rawAppointments.map(appointment => {
      return new Appointment(this, appointment);
    });
  }
  persist() {
    autorun(() => {
      storage.set('CalendarStore', this.toJson);
    });
  }
}

export default new CalendarStore();
