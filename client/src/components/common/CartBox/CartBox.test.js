import React from 'react';
import { shallow } from 'enzyme';
import { CartBoxComponent } from './CartBox';

const mockProps = {
  cart: {
    products: [
      { id: 1, title: 'test title', price: 1, amount: 1 },
    ],
    amount: 1,
  },
};

describe('Component CartBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartBoxComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
