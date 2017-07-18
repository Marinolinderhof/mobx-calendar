import React from 'react';
import { shallow, render } from 'enzyme';

import { moment } from 'utils';
import HourItem from '../index';

describe('<HourItem />', () => {
  const minProps = { hour: 18 };

  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(<HourItem id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render two children', () => {
    const renderedComponent = shallow(<HourItem />);
    expect(renderedComponent.children().length).toEqual(2);
  });

  it('should render item Hour  ', () => {
    const renderedComponent = shallow(<HourItem {...minProps} />);
    const hour = minProps.hour;
    expect(renderedComponent.contains(moment({ hour }).format('H:mm'))).toEqual(
      true
    );
  });

  // it('should render its text', () => {
  //   const children = 'Text';
  //   const renderedComponent = shallow(
  //     <HourItem>
  //       {children}
  //     </HourItem>
  //   );
  //   expect(renderedComponent.contains(children)).toBe(true);
  // });
});
