import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './';

describe('SearchInput', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchInput />);
    expect(component).toMatchSnapshot();
  });

  it ('should display the placeholder text', () => {
    const component = shallow(
      <SearchInput
        placeholderText="Enter search value here"
      />
    );
    expect(component.html()).toContain('Enter search value here');
  });

  it ('should display the search value text', () => {
    const component = shallow(
      <SearchInput
        searchValue="railties"
      />
    );
    expect(component.html()).toContain('railties');
  });

  it ('should invoke the submit handler if the user presses <ENTER>', () => {
    const spyOnSubmit = jest.fn();
    const component = shallow(
      <SearchInput
        onSubmit={spyOnSubmit}
      />
    );
    component.find('input').simulate('keypress', { key: 'Enter' });
    expect(spyOnSubmit).toHaveBeenCalled();
  });

  it ('should not invoke the submit handler if another key is pressed', () => {
    const spyOnSubmit = jest.fn();
    const component = shallow(
      <SearchInput
        onSubmit={spyOnSubmit}
      />
    );
    component.find('input').simulate('keypress', { key: 'Tab' });
    expect(spyOnSubmit).not.toHaveBeenCalled();
  });

  it ('should call the change handler with the supplied value', () => {
    const spyOnChange = jest.fn();
    const component = shallow(
      <SearchInput
        onChange={spyOnChange}
      />
    );
    component.find('input').simulate('change', { target: { value: 'rails' } });
    expect(spyOnChange).toHaveBeenCalledWith('rails');
  });
});
