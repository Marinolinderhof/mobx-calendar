import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import { moment } from 'utils';

//components
import Wrapper from './Wrapper';
import Side from './Side';
import Row from './Row';
import DayTimegrid from 'containers/DayTimegrid';
import Card from 'components/Card';
import H1 from 'components/H1';

import { AppointmentForm } from 'forms';

class DayContainer extends PureComponent {
  handleSubmitForm = e => {
    e.preventDefault();
    this.props.calendarStore.addAppointment();
  };

  render() {
    const today = moment().format('LL');

    return (
      <Wrapper>
        <H1>Today's appointments</H1>
        <Row>
          <Card title={today}>
            <DayTimegrid day={today} />
          </Card>
          <Side>
            <AppointmentForm />
          </Side>
        </Row>
      </Wrapper>
    );
  }
}

const storeInjector = a => {
  return { calendarStore: a.stores.CalendarStore };
};

export default inject(storeInjector)(observer(DayContainer));
