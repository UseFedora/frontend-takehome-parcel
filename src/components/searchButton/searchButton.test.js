import React from 'react';
import { shallow } from 'enzyme';
import SearchButton from './';

describe('SearchButton', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchButton />);
    expect(component).toMatchSnapshot();
  });

  it('should trigger the click handler', () => {
    const spyOnClick = jest.fn();
    const component = shallow(
      <SearchButton
        onClick={spyOnClick}
      />
    );
    component.find('button').simulate('click');
    expect(spyOnClick).toHaveBeenCalled();
  });
});
