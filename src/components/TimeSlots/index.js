import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const TimeSlot = styled.div`height: 30px;`;

const TimeSlots = props => {
  const { amount } = props;

  return (
    <Wrapper>
      {[...Array(amount)].map((x, i) => <TimeSlot key={i} stripe={!amount} />)}
    </Wrapper>
  );
};
export default TimeSlots;
