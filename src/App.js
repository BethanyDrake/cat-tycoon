import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import MyCatsPage from './MyCatsPage.js';
import CatsForSalePage from './CatsForSalePage.js';
import { generateName } from './NameGenerator.js'
import { Tab } from 'semantic-ui-react'
//import _ from 'lodash'

function generateCats(num) {
  let catArray = []
  for (var i = 0; i < num; i++) {
    catArray.push({
      id: i,
      name: generateName(),
      cuteness: Math.floor(Math.random() * 100),
      aggression: Math.floor(Math.random() * 100),
      intelligence: Math.floor(Math.random() * 100),
      energy: Math.floor(Math.random() * 100),
      affection:Math.floor(Math.random() * 100)
    })
  }
  return catArray
}


class App extends Component {




  constructor(props) {
    super(props)
    window.money = 33
    window.myCats = []
    window.catsForSale = generateCats(3)
    console.log("app catsForSale", window.catsForSale)
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
      $500
      <Tab panes={panes} />
      </div>
    );
  }
}





export default App;
