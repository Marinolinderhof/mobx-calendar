import React from 'react';
import { shallow } from 'enzyme';

import Hour from '../Hour';

describe('<Hour />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(<Hour id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Hour>
        {children}
      </Hour>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
