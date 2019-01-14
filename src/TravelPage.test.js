import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import { render } from 'enzyme';
import { mount } from 'enzyme';




import TravelPage from './TravelPage.js'

import { Button } from 'semantic-ui-react'

describe('travel page', () => {
  let travelPageShallow = mount(<TravelPage/>)
  it('should have a bunch of buttons', () => {
    expect(travelPageShallow.find(Button)).to.have.lengthOf(2)
  });
});

describe('when you click a button', ()=> {
  let state = {currentLocation:'A'};
  let travelPage = mount (<TravelPage injected={state}/>)
  it('should update the current location', () => {
    expect(state.currentLocation).to.equal('A');
    travelPage.find('Button').first().simulate('click')
    expect(state.currentLocation).to.equal('Melbourne');
  });
});
