import React from 'react';
import { moment } from 'utils';
// local components
import Wrapper from './Wrapper';
import Hour from './Hour';
// components
import TimeSlots from 'components/TimeSlots';

const HourItem = props => {
  const { hour, ...rest } = props;

  const timeInHour = moment({ hour }).format('H:mm');
  return (
    <Wrapper {...rest}>
      <Hour>
        {timeInHour}
      </Hour>
      <TimeSlots amount={2} />
    </Wrapper>
  );
};
export default HourItem;
