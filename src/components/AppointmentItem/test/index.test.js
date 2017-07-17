import React from 'react';
import { shallow } from 'enzyme';

import AppointmentItem from '../index';

describe('<AppointmentItem />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(<AppointmentItem id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render the items', () => {
    const stubprops = {
      title: 'Title',
      start: new Date(),
      end: new Date(),
      desc: 'Desc'
    };

    const renderedComponent = shallow(
      <AppointmentItem
        title={stubprops.title}
        start={stubprops.start}
        end={stubprops.end}
        desc={stubprops.desc}
      />
    );
    expect(renderedComponent.find(stubprops)).toBeDefined();
  });
});
