import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
// import components
import Label from './Label';
import Error from './Error';

const TextArea = styled.textarea`
  background: #fff;
  width: 100%;
  padding: 8px;
`;

export default observer(({ field, rows = 15 }) =>
  <div>
    <Label htmlFor={field.id}>
      {field.label}
    </Label>
    <TextArea {...field.bind()} rows={rows} />
    <Error>
      {field.error}
    </Error>
  </div>
);
