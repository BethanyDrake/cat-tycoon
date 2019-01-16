import React from 'react';
import ReactDOM from 'react-dom';
global.jestExpect = global.expect;
import {expect} from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'semantic-ui-react'
import {locations} from './locations.js'

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import { render } from 'enzyme';
import { mount } from 'enzyme';

import moment from 'moment/moment.js';

let a = 1

import TravelPage from './TravelPage.js'





describe('travel page', () => {
  let state = {currentLocation:'Adelaide', currentDate: moment("2000-01-01")};
  let travelPageShallow = mount(<TravelPage injected={state}/>)
  it('should have a bunch of buttons', () => {
    expect(travelPageShallow.find(Button)).to.have.lengthOf(Object.keys(locations).length)
  });
});

describe('when you click a button', ()=> {
  let mockWindow = {currentLocation:'Adelaide', currentDate: moment("2000-01-01"), food: 100, myCats:[{key:1}]};
  let calledWith = null
  let fakeUpdateState = jest.fn()
  mockWindow.dateManager = {updateState: fakeUpdateState}
  let travelPage = mount (<TravelPage injected={mockWindow}/>)

  it('should update the current location', () => {
    expect(mockWindow.currentDate.format('Do MMMM')).to.equal("1st January");
    expect(mockWindow.currentLocation).to.equal('Adelaide');
    expect(mockWindow.food).to.equal(100);
    travelPage.find('Button').first().simulate('click')
    expect(mockWindow.currentLocation).to.equal('Melbourne');
    expect(mockWindow.currentDate.format('Do MMMM')).to.equal("2nd January");
    jestExpect(fakeUpdateState).toHaveBeenCalledWith({daysPassed:1})
  });

});
