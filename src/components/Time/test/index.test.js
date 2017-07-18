import React from 'react';
import { shallow } from 'enzyme';
import { moment } from 'utils';
import Time from '../index';

describe('<Time />', () => {
  const minProps = { time: moment() };

  it('should render the component if no props are passed', () => {
    const renderedComponent = shallow(<Time />);
    expect(renderedComponent.length).toEqual(1);
  });

  it("Shouldn't have a  prop called time", () => {
    const renderedComponent = shallow(<Time {...minProps} />);
    expect(renderedComponent.prop('time')).toBeUndefined();
  });

  it('Should render Time', () => {
    const renderedComponent = shallow(<Time {...minProps} />);
    const TimeFormat = 'H:mm';
    expect(renderedComponent.text('time')).toEqual(
      moment(minProps.time).format(TimeFormat)
    );
  });
});
