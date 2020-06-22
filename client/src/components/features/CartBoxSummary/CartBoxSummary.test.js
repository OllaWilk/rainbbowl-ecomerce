import React from 'react';
import { shallow } from 'enzyme';
import { CartBoxSummaryComponent } from './CartBoxSummary';

describe('Component Button', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartBoxSummaryComponent />);
    expect(component).toBeTruthy();
  });
});
