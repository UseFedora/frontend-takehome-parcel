import React from 'react';
import { shallow } from 'enzyme';
import SavedItemsIndicator from './';

describe('SavedItemsIndicator', () => {
  it('should render correctly', () => {
    const component = shallow(<SavedItemsIndicator />);
    expect(component).toMatchSnapshot();
  });

  it('should display the proper grammatical label for 1 item', () => {
    const component = shallow(
      <SavedItemsIndicator
        numberOf={1}
      />
    );
    expect(component.text()).toMatch(/1 gem$/);
  });

  it('should display the proper grammatical label for 0 items', () => {
    const component = shallow(
      <SavedItemsIndicator
        numberOf={0}
      />
    );
    expect(component.text()).toMatch(/0 gems$/);
  });

  it('should display the proper grammatical label for more than 1 items', () => {
    const component = shallow(
      <SavedItemsIndicator
        numberOf={14}
      />
    );
    expect(component.text()).toMatch(/14 gems$/);
  });
});
