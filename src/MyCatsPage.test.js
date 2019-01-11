import React from 'react';
import ReactDOM from 'react-dom';
import CatProfile from './CatProfile.js'
import MyCatsPage from './MyCatsPage.js'
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';


describe('my cats page', ()=> {
  const appWrapper = shallow(<MyCatsPage />);
  it('should have a bunch of cat profiles', ()=>{
    expect(appWrapper.find(CatProfile)).to.have.lengthOf(13);
  })
});
