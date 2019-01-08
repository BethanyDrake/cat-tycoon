import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CatProfile from './CatProfile.js'
import MyCatsPage from './MyCatsPage.js'
import {expect} from 'chai';


import { configure } from 'enzyme';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('the main app', () => {
  const appWrapper = shallow(<MyCatsPage />);
  it('has a cat profile in it', () => {
    expect(appWrapper.find(CatProfile)).to.have.lengthOf(13);
  });
});
