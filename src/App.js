import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import MyCatsPage from './MyCatsPage.js';
import CatsForSalePage from './CatsForSalePage.js';
import { generateName } from './NameGenerator.js'
import { Tab } from 'semantic-ui-react'
import StateManager from './StateManager'
//import _ from 'lodash'

function generateCats(num) {
  let catArray = []
  for (var i = 0; i < num; i++) {
    catArray.push({
      id: i,
      imageNumber: Math.floor(Math.random() * 100),
      name: generateName(),
      cuteness: Math.floor(Math.random() * 100),
      aggression: Math.floor(Math.random() * 100),
      intelligence: Math.floor(Math.random() * 100),
      energy: Math.floor(Math.random() * 100),
      affection:Math.floor(Math.random() * 100),
      price: 5
    })
  }
  return catArray
}

class App extends Component {


  updateState(){
    this.setState({money: window.money})
  }

  constructor(props) {
    super(props)
    window.stateManager = new StateManager()
    window.stateManager.listeners.push(this)
    window.money = 500
    window.myCats = []
    window.catsForSale = generateCats(3)
    console.log("app catsForSale", window.catsForSale)
    this.updateState = this.updateState.bind(this)

  }

  render() {


    console.log("app money", window.money)
    console.log("app catsForSale", window.catsForSale)

    let panes = [
  { menuItem: 'For Sale', render: () => <Tab.Pane><CatsForSalePage/></Tab.Pane> },
  { menuItem: 'My Cats', render: () => <Tab.Pane><MyCatsPage/></Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]
    return (
      <div>
      ${window.money}
      <Tab panes={panes} />
      </div>
    );
  }
}





export default App;
