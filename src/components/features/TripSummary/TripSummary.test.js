import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe ('Component TripSummary', () => {
  it('should generate link to correct address', () => {
    const expectedId = 'navy';
    const component = shallow(<TripSummary id={expectedId}/>);
    expect(component).toBeTruthy();
  });
  it('should have correct src and alt to <img>', () => {
    const expectedSrc = 'img.jpg';
    const expectedAlt = 'imgAlt';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);
  
    expect(component.find('.img').prop('src')).toEqual(expectedSrc);
    expect(component.find('.img').prop('alt')).toEqual(expectedAlt);
  });
  it('should render name, cost and days props correctly', () => {
    const expectedName = 'strings';
    const expectedCost = '18,50';
    const expectedDays = 6;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);
    
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.span').first().text()).toEqual(`${expectedDays} days`);
    expect(component.find('.span').at(1).text()).toEqual(`from ${expectedCost}`);

  });
  it('should induce error in case of lack of id, image, name, cost or days props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render span in correct order', () => {
    const tags = ['thunder', 'mickey', 'home'];
    const component = shallow(<TripSummary tags={[...tags]} />);
    expect(component.find('.tags span').at(0).text()).toEqual(tags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(tags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(tags[2]);
  });
  it('should crashed if tags is not exist or is empty array', () => {
    
  });
});