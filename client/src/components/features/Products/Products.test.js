import React from 'react';
import { shallow } from 'enzyme';
import { ProductsComponent } from './Products';

const mockProps = {
  products: [
    { id: '1', title: 'test title', images: 'abc.img', price: 8 },
    { id: '2', title: 'test title', images: 'abc.img', price: 8 },
  ],
};

describe('Component Products', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
