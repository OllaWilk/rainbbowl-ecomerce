import React from 'react';
import { shallow } from 'enzyme';
import { CartSideBarComponent } from './CartSideBar';

const mockProps = {
  cart: {
    products: [],
    amount: 5,
  },
};

describe('Component CartSideBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartSideBarComponent {...mockProps}/>);
    expect(component).toBeTruthy();
  });
});
