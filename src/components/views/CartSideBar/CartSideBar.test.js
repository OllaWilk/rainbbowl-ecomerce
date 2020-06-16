import React from 'react';
import { shallow } from 'enzyme';
import { CartSideBarComponent } from './CartSideBar';

describe('Component CartSideBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartSideBarComponent />);
    expect(component).toBeTruthy();
  });
});
