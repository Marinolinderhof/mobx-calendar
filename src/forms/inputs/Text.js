import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
// import components
import Label from './Label';
import Error from './Error';
import Input from './Input';

const Wrapper = styled.div`margin-bottom: 8px;`;

export default observer(({ field, type = 'input', placeholder }) =>
  <Wrapper>
    <Label htmlFor={field.id}>
      {field.label}
    </Label>
    <Input
      aria-describedby="title-desc"
      {...field.bind({ type, placeholder })}
    />
    <Error>
      {field.error}
    </Error>
  </Wrapper>
);
