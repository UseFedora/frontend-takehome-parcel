import React from 'react';
import { shallow } from 'enzyme';
import BannerTitle from './';

describe('BannerTitle', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <BannerTitle
        label="Test Banner Title"
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should output the supplied label', () => {
    const wrapper = shallow(
      <BannerTitle
        label="Test Banner Title"
      />
    );
    expect(wrapper.text()).toEqual('Test Banner Title');
  });
});
