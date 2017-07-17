import React from 'react';
import { moment } from 'utils';

const Time = ({ time, ...props }) =>
  <time {...props}>
    {moment(time).format('H:mm')}
  </time>;

export default Time;
