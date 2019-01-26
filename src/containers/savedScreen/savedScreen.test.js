import React from 'react';
import { shallow } from 'enzyme';
import SavedScreen from './';

describe('SavedScreen', () => {
  it('should render correctly', () => {
    const component = shallow(<SavedScreen />);
    expect(component).toMatchSnapshot();
  });
});
