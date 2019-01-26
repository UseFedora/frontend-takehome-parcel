import React from 'react';
import { shallow } from 'enzyme';
import Constants from '../../common/constants';
import GemCard from './';

describe('GemCard', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should output the supplied information', () => {
    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
      />
    );
    expect(wrapper.text()).toContain('Railties');
    expect(wrapper.text()).toContain('1.0.1');
    expect(wrapper.text()).toContain('Does stuff');
  });

  it('should not output empty fields if no values supplied', () => {
    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
      />
    );
    expect(wrapper.text()).not.toContain('Authors(s):');
    expect(wrapper.text()).not.toContain('Licenses(s):');
    expect(wrapper.text()).not.toContain('Project:');
    expect(wrapper.text()).not.toContain('Gem:');
    expect(wrapper.text()).not.toContain('Homepage:');
    expect(wrapper.text()).not.toContain('Documentation:');
  });

  it('should output the author if it\'s been supplied', () => {
    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
        authors={"William Shakespeare"}
      />
    );
    expect(wrapper.text()).toContain('Authors(s):');
    expect(wrapper.text()).toContain('William Shakespeare');
  });

  it('should output the licenses if they have been supplied', () => {
    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
        licenses={['MIT', 'Apache']}
      />
    );
    expect(wrapper.text()).toContain('License(s):');
    expect(wrapper.text()).toContain('MIT, Apache');
  });

  it('should output the project URI if it\'s been supplied', () => {
    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
        project_uri={"www.rubygems.org/project"}
      />
    );
    expect(wrapper.text()).toContain('Project:');
    expect(wrapper.text()).toContain('www.rubygems.org/project');
  });

  it('should output the gem URI if it\'s been supplied', () => {
    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
        gem_uri={"www.rubygems.org/gem"}
      />
    );
    expect(wrapper.text()).toContain('Gem:');
    expect(wrapper.text()).toContain('www.rubygems.org/gem');
  });

  it('should output the homepage URI if it\'s been supplied', () => {
    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
        homepage_uri={"www.rubygems.org"}
      />
    );
    expect(wrapper.text()).toContain('Homepage:');
    expect(wrapper.text()).toContain('www.rubygems.org');
  });

  it('should output the documentation URI if it\'s been supplied', () => {
    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
        documentation_uri={"www.rubygems.org/docs"}
      />
    );
    expect(wrapper.text()).toContain('Documentation:');
    expect(wrapper.text()).toContain('www.rubygems.org/docs');
  });

  it('should register a click on the save/unsave icon', () => {
    const spyOnClickSave = jest.fn();

    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
        onClickSave={spyOnClickSave}
      />
    );
    wrapper.find('.save-icon-test-target').simulate('click');
    expect(spyOnClickSave).toBeCalled();
  });

  it('should call the handler with the save action', () => {
    const spyOnClickSave = jest.fn();

    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
        onClickSave={spyOnClickSave}
      />
    );
    wrapper.find('.save-icon-test-target').simulate('click');
    expect(spyOnClickSave).toBeCalledWith(Constants.UiElements.ACTION_SAVE, 'Railties');
  });

  it('should call the handler with the unsave action', () => {
    const spyOnClickSave = jest.fn();

    const wrapper = shallow(
      <GemCard
        name={"Railties"}
        version={"1.0.1"}
        info={"Does stuff"}
        isSaved={true}
        onClickSave={spyOnClickSave}
      />
    );
    wrapper.find('.save-icon-test-target').simulate('click');
    expect(spyOnClickSave).toBeCalledWith(Constants.UiElements.ACTION_DELETE_SAVED, 'Railties');
  });
});
