import React from 'react';
import { shallow } from 'enzyme';

import TimeSlots from '../index';

describe('<TimeSlots />', () => {
  const minProps = { amount: 2 };

  it('should render the component if no items are passed', () => {
    const renderedComponent = shallow(<TimeSlots {...minProps} />);
    expect(renderedComponent.length).toEqual(1);
  });

  it("Shouldn't have a  prop called amount", () => {
    const renderedComponent = shallow(<TimeSlots {...minProps} />);
    expect(renderedComponent.prop('amount')).toBeUndefined();
  });

  it('Should have Timeslot items equal to amount', () => {
    const renderedComponent = shallow(<TimeSlots {...minProps} />);
    expect(renderedComponent.children().length).toEqual(minProps.amount);
  });
});
