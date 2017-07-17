import React from 'react';

import Title from './Title';
import Children from './Children';
import Wrapper from './Wrapper';

const Card = props => {
  const { title, children } = props;
  return (
    <Wrapper>
      {title &&
        <Title>
          {title}
        </Title>}
      <Children>
        {children}
      </Children>
    </Wrapper>
  );
};
export default Card;
