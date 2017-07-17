import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';

// import components
import HourItem from 'components/Hour';
import AppointmentItem from 'components/AppointmentItem';

import Wrapper from './Wrapper';
import AppointmentsWrapper from './AppointmentsWrapper';

class DayTimegrid extends PureComponent {
  getAppointments() {
    return this.props.calendarStore.getDayAppointments;
  }
  getAppointmentStyle(id) {
    return this.props.calendarStore.getAppointmentStyle(id);
  }

  render() {
    const hoursArray = [...Array(24)];
    const renderHourGrid = (x, index) => <HourItem key={index} hour={index} />;

    const renderAppointments = ({ id, ...props }) => {
      const { offset, width, top, height } = this.getAppointmentStyle(id);
      return (
        <AppointmentItem
          offset={offset}
          width={width}
          key={id}
          top={top}
          height={height}
          {...props}
        />
      );
    };

    return (
      <Wrapper>
        <AppointmentsWrapper>
          {this.getAppointments().map(renderAppointments)}
        </AppointmentsWrapper>
        {hoursArray.map(renderHourGrid)}
      </Wrapper>
    );
  }
}

const storeInjector = ({ stores }) => ({
  calendarStore: stores.CalendarStore
});

export default inject(storeInjector)(observer(DayTimegrid));
