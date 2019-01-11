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
  describe('when there are no cats for sale', ()=> {
    const pageWrapper = shallow(<MyCatsPage injected={{myCats:[]}} />);
    it('should not display any cat profiles', ()=>{
      expect(pageWrapper.find(CatProfile)).to.have.lengthOf(0);
    });
  });
  describe('when there are some cats for sale', ()=> {
    const pageWrapper = shallow(<MyCatsPage injected={{myCats:[{id:1},{id:2}]}} />);
    it('should not display those cat profiles', ()=>{
      expect(pageWrapper.find(CatProfile)).to.have.lengthOf(2);
    });
  });
});
