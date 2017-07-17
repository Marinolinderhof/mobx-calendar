import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
// import components
import Label from './Label';
import Error from './Error';
import Input from './Input';
import calendarIcon from './calendar.svg';

const Wrapper = styled.div`margin-bottom: 8px;`;

const InputDate = Input.extend`
  background-image: url(${calendarIcon});
  background-position: 10px center;
  background-repeat: no-repeat;
  padding-left: 36px;
`;

export default observer(({ field, type = 'input', placeholder }) =>
  <Wrapper>
    <Label htmlFor={field.id}>
      {field.label}
    </Label>
    <InputDate aria-describedby="date" {...field.bind({ type, placeholder })} />
    <Error>
      {field.error}
    </Error>
  </Wrapper>
);
