import React from 'react';

// local components
import AppointmentCard from './AppointmentCard';
import Header from './Header';
import Title from './Title';
import Body from './Body';
import TimeFromTo from './TimeFromTo';

import Time from 'components/Time';

const AppointmentItem = props => {
  const { title, desc, start, end, ...rest } = props;

  return (
    <AppointmentCard {...rest}>
      <Header>
        <Title>
          {title}
        </Title>
        <TimeFromTo>
          <Time time={start} />-<Time time={end} />
        </TimeFromTo>
      </Header>
      <Body>
        {desc}
      </Body>
    </AppointmentCard>
  );
};
export default AppointmentItem;
