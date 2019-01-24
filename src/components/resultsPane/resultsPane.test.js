import React from 'react';
import { shallow } from 'enzyme';
import { DotLoader } from 'react-spinners';
import ResultsPane from './';

describe('ResultsPane', () => {
  it('should render correctly', () => {
    const component = shallow(<ResultsPane />);
    expect(component).toMatchSnapshot();
  });

  it('should render the spinner when loading', () => {
    const component = shallow(
      <ResultsPane
        isLoading={true}
      />
    );
    expect(component.find(DotLoader).exists()).toBeTruthy();
  });

  it('should display the empty results message', () => {
    const component = shallow(
      <ResultsPane
        numberOfResults={0}
        emptyResultsMessage="Nothing going on here"
      />
    );
    expect(component.text()).toContain('Nothing going on here');
  });

  it('should not display the empty results message if there are results', () => {
    const component = shallow(
      <ResultsPane
        numberOfResults={1}
        emptyResultsMessage="Nothing going on here"
      />
    );
    expect(component.text()).not.toContain('Nothing going on here');
  });

  it('should render the supplied component', () => {
    const component = shallow(
      <ResultsPane
        numberOfResults={1}
      >
        <ul className="a-result"></ul>
      </ResultsPane>
    );
    expect(component.find('ul.a-result').exists()).toBeTruthy();
  });
});
