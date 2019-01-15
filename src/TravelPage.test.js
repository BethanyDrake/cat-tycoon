import React from 'react';
import ReactDOM from 'react-dom';
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
  let state = {currentLocation:'Adelaide', currentDate: moment("2000-01-01")};
  let travelPage = mount (<TravelPage injected={state}/>)
  it('should update the current location', () => {
    expect(state.currentDate.format('Do MMMM')).to.equal("1st January");
    expect(state.currentLocation).to.equal('Adelaide');
    travelPage.find('Button').first().simulate('click')
    expect(state.currentLocation).to.equal('Melbourne');
    expect(state.currentDate.format('Do MMMM')).to.equal("2nd January");
  });

});
