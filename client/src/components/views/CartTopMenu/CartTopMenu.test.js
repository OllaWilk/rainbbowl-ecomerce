import React from 'react';
import { shallow } from 'enzyme';
import { CartTopMenuComponent } from './CartTopMenu';


const mockProps = {
  cart: {
    products: [
      { id: '1', title: 'test title', price: 1, amount: 1 },
    ],
    amount: 1,
  },
};

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartTopMenuComponent {...mockProps}  />);
    expect(component).toBeTruthy();
  });
});
