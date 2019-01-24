import React from 'react';
import { shallow } from 'enzyme';
import PageTitle from './';

describe('PageTitle', () => {
  it('should render correctly', () => {
    const component = shallow(
      <PageTitle
        label={"Test Page Title"}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should output the supplied label', () => {
    const wrapper = shallow(
      <PageTitle
        label="Test Page Title"
      />
    );
    expect(wrapper.text()).toEqual('Test Page Title');
  });
});
