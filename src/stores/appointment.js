import { extendObservable } from 'mobx';
import uuidv4 from 'uuid/v4';

class Appointment {
  id = uuidv4();
  store;

  constructor(store, { start, end, title, desc }) {
    this.store = store;
    extendObservable(this, {
      start,
      end,
      title,
      desc
    });
  }

  toJS() {
    return {
      start: this.start,
      end: this.end,
      title: this.title,
      desc: this.desc
    };
  }
}

export default Appointment;
