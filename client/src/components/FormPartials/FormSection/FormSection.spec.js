import 'babel-polyfill';
import React from 'react'
import 'raf/polyfill';
import { expect }from 'chai';
import sinon from 'sinon';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  MinMax,
  DropDown,
  DropDownOr,
  Radio,
  MultiMinMax,
  Text,
  TextNoVal,
  TextArea,
  DateTime,
  TextAreaNoVal,
  RadioNoText,
} from "../TestFormData";
import FormSection from "./FormSection";
import SubSection from "../SubSection/SubSection";

configure({adapter: new Adapter()});

describe('FormSection Component', () => {
  let wrapper;
  let toggleSection = sinon.spy();

  const DefaultData = [MinMax, DropDown, DropDownOr, Radio, MultiMinMax, Text, TextNoVal, TextArea, DateTime,
    TextAreaNoVal];

  const props = {
    title: 'title',
    formData: DefaultData,
    toggleSection: toggleSection,
    showSection: true,
    validateMinMax: sinon.spy(),
    checkDropDownDisabled: sinon.spy(),
    checkConditions: sinon.spy(),
  };

  beforeEach(() => {
    wrapper = shallow(
        <FormSection
          title={props.title}
          showSection={props.showSection}
          formData={props.formData}
          toggleSelection={props.toggleSection}
          checkDropDownDisabled={props.checkDropDownDisabled}
          checkConditions={props.checkConditions}
          validateMinMax={props.validateMinMax}
        />
    )
  });

  it('should render a DropDown component', () => {
    expect(wrapper.find('DropDown')).to.have.length(1);
  });

  it('should NOT render div with className FormSectionStyles__formInnerSection when prop showSection is false', () => {
    wrapper.setProps({showSection: false});
    expect(wrapper.find('.FormSectionStyles__formInnerSection')).to.have.length(0);
  });

  it('should render div with className FormSectionStyles__formInnerSection when prop showSection is true', () => {
    wrapper.setProps({showSection: true});
    expect(wrapper.find('.FormSectionStyles__formInnerSection')).to.have.length(1);
  });

  it('should call toggleSection when icon is clicked', () => {
    wrapper.setProps({toggleSection: toggleSection});
    wrapper.find('.material-icons').simulate('click');
    expect(toggleSection.calledOnce).to.be.true;
  });

  it("should render both a SubSection Component with title prop 'Min Max Component' and 2 MinMax Components", () => {
    wrapper.setProps({formData: [MinMax]});
    expect(wrapper.find('SubSection').prop('title')).to.equal(MinMax.title);
    expect(wrapper.find('MinMax')).to.have.length(2);
  });

  it(`should render both SubSection Component with title prop ${Radio.title} and a Radio Component`, () => {
    wrapper.setProps({formData: [Radio]});
    expect(wrapper.find('SubSection').prop('title')).to.equal(Radio.title);
    expect(wrapper.find('Radio')).to.have.length(1);

  });

  it('should render a Dropdown Component', () => {
    wrapper.setProps({formData: [DropDown]});
    expect(wrapper.find('DropDown')).to.have.length(1);
  });

  it('should render a SubSection Component with a nested DropdownList Component', () => {
    wrapper.setProps({formData: [DropDownOr]});
    expect(wrapper.find('DropDownList')).to.have.length(1)
    expect(wrapper.find('SubSection')).to.have.length(1)
  });

  it(`should render a SubSection Component with prop title=${DateTime.title}`, () => {
    wrapper.setProps({formData: [DateTime]});
    expect(wrapper.find('SubSection').prop('title')).to.equal(DateTime.title);
    expect(wrapper.find('DateTime')).to.have.length(1);
  });

  it(`should render a SubSection Component with prop title=${MultiMinMax.title} and ${MultiMinMax.data.length} MinMax Components`, () => {
    wrapper.setProps({formData: [MultiMinMax]});
    expect(wrapper.find('SubSection').prop('title')).to.equal(MultiMinMax.title);
    expect(wrapper.find('MinMax')).to.have.length(MultiMinMax.data.length);
  });

  it('should render a Text component', () => {
    wrapper.setProps({formData: [Text]});
    expect(wrapper.find('Text')).to.have.length(1);
  });

  it('should render a Text component with prop needsVal=false', () => {
    wrapper.setProps({formData: [TextNoVal]});
    expect(wrapper.find('Text').prop('needsVal')).to.equal(false);
  });

  it(`should render ${RadioNoText.data.length} DefaultConnectedControlRadio Component with prop`, () => {
    wrapper.setProps({formData: [RadioNoText]});
    expect(wrapper.find('DefaultConnectedControlRadio')).to.have.length(RadioNoText.data.length);
  });

  it('should render a Textarea component with the prop needsVal=true', () => {
    wrapper.setProps({formData: [TextArea]});
    expect(wrapper.find('Textarea').prop('needsVal')).to.equal(true);
  });

  it('should render a Textarea component with the prop needsVal=false', () => {
    wrapper.setProps({formData: [TextAreaNoVal]});
    expect(wrapper.find('Textarea').prop('needsVal')).to.equal(false);
  });

  it('should should NOT return div with class FormSectionStyles__formInnerSection when formData prop is not an Array', () => {
    wrapper.setProps({formData: Text});
    expect(wrapper.find('.FormSectionStyles__formInnerSection')).to.have.length(0);
  });

});