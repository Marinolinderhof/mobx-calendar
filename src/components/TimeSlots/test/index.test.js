import React from 'react';
import { shallow } from 'enzyme';

import DayCard from '../index';

describe('<DayCard />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(<DayCard id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <DayCard>
        {children}
      </DayCard>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
