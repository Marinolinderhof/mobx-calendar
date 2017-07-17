import React from 'react';
import { shallow } from 'enzyme';

import HourItem from '../index';

describe('<HourItem />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(<HourItem id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <HourItem>
        {children}
      </HourItem>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
