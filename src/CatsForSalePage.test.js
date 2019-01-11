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

  describe('when there are no cats for sale', ()=> {
    const appWrapper = shallow(<CatsForSale injected={{catsForSale:[]}} />);
    it('should not display any cat profiles', ()=>{
      expect(appWrapper.find(ForSaleCatProfile)).to.have.lengthOf(0);
    });
  });
  describe('when there are some cats for sale', ()=> {
    const appWrapper = shallow(<CatsForSale injected={{catsForSale:[{id:1},{id:2}]}} />);
    it('should not display those cat profiles', ()=>{
      expect(appWrapper.find(ForSaleCatProfile)).to.have.lengthOf(2);
    });
  });

});
