import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CatProfile from './CatProfile.js'
import MyCatsPage from './MyCatsPage.js'
import {expect} from 'chai';


import { configure } from 'enzyme';
import { render } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('the main app', () => {

  it('has a cat profile in it', () => {

  });
});

describe('what you see', () => {
  const appWrapper = mount(<App/>);

  it('should display money', () => {
    expect(appWrapper.text()).to.contain("$500")
  });
  it('should display currentLocation', () => {
    expect(appWrapper.text()).to.contain("Melbourne")
  });
  it('should display date nicely', () => {
    expect(appWrapper.text()).to.contain("1st January")
  });
  it('should display food', () => {
    expect(appWrapper.text()).to.contain("Food: 50")
  });
  it('should how much youre eating per day', () => {
    expect(appWrapper.text()).to.contain("(-0 per day)")
  });
});
