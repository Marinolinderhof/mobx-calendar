import MobxReactForm from 'mobx-react-form';
import { moment } from 'utils';

import fields from './fields';
import plugins from 'forms/plugins';
import { CalendarStore } from 'stores';

class appointmentHandlers extends MobxReactForm {
  addAppointmentAction = (...value) => CalendarStore.addAppointment(...value);

  onSuccess(form) {
    const values = form.values();
    values.start = moment(values.start, 'H:mm').toDate();
    values.end = moment(values.end, 'H:mm').toDate();

    this.addAppointmentAction(values);
  }

  onError(form) {
    // get all form errors
    console.log('All form errors', form.errors());
    // invalidate the form with a custom error message
    form.invalidate('This is a generic error message!');
  }
}
export default new appointmentHandlers({ fields }, { plugins });
