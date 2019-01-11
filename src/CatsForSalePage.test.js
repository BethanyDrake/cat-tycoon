import React from 'react';
import ReactDOM from 'react-dom';
import CatProfile from './CatProfile.js'
import CatsForSale from './CatsForSalePage.js'
import ForSaleCatProfile from './ForSaleCatProfile.js';
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';


describe('my cats page', ()=> {
  const appWrapper = shallow(<CatsForSale />);
  it('should have a bunch of for sale cat profiles', ()=>{
    expect(appWrapper.find(ForSaleCatProfile)).to.have.lengthOf(13);
  })
});
