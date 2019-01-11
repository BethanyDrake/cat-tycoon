import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import { render } from 'enzyme';
import { mount } from 'enzyme';
import { Button } from 'semantic-ui-react'



import MyCatsCatProfile from './MyCatsCatProfile.js'
import { Image } from 'semantic-ui-react'

describe('cat profile', () => {
  describe('when you set it up', () => {

    const cat = { name: "NAME", cuteness: 1, aggression: 2, intelligence: 3, energy: 4, affection: 5  }
    const catProfileStaticWrapper = render(<MyCatsCatProfile cat={cat}/>);
    const catProfileWrapper = shallow(<MyCatsCatProfile cat = {cat} />);
    const catProfileMountedWrapper = mount(<MyCatsCatProfile cat = {cat} />);
    it('has an image', () => {
      expect(catProfileMountedWrapper.find(Image)).to.have.lengthOf(1);
    });
    it('has has all the stats', () => {
      expect(catProfileStaticWrapper.text()).to.contain("NAME")
      expect(catProfileStaticWrapper.text()).to.contain("Cuteness: 1")
      expect(catProfileStaticWrapper.text()).to.contain("Aggression: 2")
      expect(catProfileStaticWrapper.text()).to.contain("Intelligence: 3")
      expect(catProfileStaticWrapper.text()).to.contain("Energy: 4")
      expect(catProfileStaticWrapper.text()).to.contain("Affection: 5")
    });
    it('has a button sell button', () => {
      expect(catProfileMountedWrapper.find(Button)).to.have.lengthOf(1);
      expect(catProfileStaticWrapper.text()).to.contain("SELL")
    });
  })


  describe('when you click the sell button', ()=>{
    let cat = {id:1};
    let otherCat = {id:2}

    let state = {
      money: 500,
      myCats: [cat, otherCat],
      catsForSale: []
    };
    let catProfileWrapper = mount(<MyCatsCatProfile cat = {cat} injected = {state}/>);

    it('state should update state', ()=> {
      expect(state.catsForSale).to.have.lengthOf(0);
      expect(state.myCats).to.have.lengthOf(2);
      expect(state.money).to.equal(500);
      catProfileWrapper.find('Button').simulate('click')
      expect(state.catsForSale).to.have.lengthOf(1);
      expect(state.myCats).to.have.lengthOf(1);
    });


  });
});
