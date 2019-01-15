import React from 'react';
import ReactDOM from 'react-dom';

import {expect} from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import { render } from 'enzyme';



import CatProfile from './CatProfile.js'
import { Image } from 'semantic-ui-react'

describe('cat profile', () => {


  const cat = { name: "NAME", cuteness: 1, aggression: 2, intelligence: 3, energy: 4, affection: 5, price: 1  }
  const catProfileStaticWrapper = render(<CatProfile cat={cat}/>);
  const catProfileWrapper = shallow(<CatProfile cat = {cat} />);
  it('has an image', () => {
    expect(catProfileWrapper.find(Image)).to.have.lengthOf(1);
  });
  it('has has all the stats', () => {
    expect(catProfileStaticWrapper.text()).to.contain("NAME")
    expect(catProfileStaticWrapper.text()).to.contain("Cuteness: 1")
    expect(catProfileStaticWrapper.text()).to.contain("Aggression: 2")
    expect(catProfileStaticWrapper.text()).to.contain("Intelligence: 3")
    expect(catProfileStaticWrapper.text()).to.contain("Energy: 4")
    expect(catProfileStaticWrapper.text()).to.contain("Affection: 5")
  });
});
