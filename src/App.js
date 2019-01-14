import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import MyCatsPage from './MyCatsPage.js';
import CatsForSalePage from './CatsForSalePage.js';
import TravelPage from './TravelPage.js';
import { generateName } from './NameGenerator.js'
import { Tab } from 'semantic-ui-react'
import StateManager from './StateManager'
import { Header } from 'semantic-ui-react'
import moment from 'moment/moment.js';
import {locations} from './locations.js'

let totalCatsGenerated = 0
function generateCats(num) {
  let catArray = []
  for (var i = 0; i < num; i++) {
    catArray.push({
      id: totalCatsGenerated++,
      imageNumber: Math.floor(Math.random() * 100),
      name: generateName(),
      cuteness: Math.floor(Math.random() * 100),
      aggression: Math.floor(Math.random() * 100),
      intelligence: Math.floor(Math.random() * 100),
      energy: Math.floor(Math.random() * 100),
      affection:Math.floor(Math.random() * 100),
      price: Math.ceil(Math.random() * 10),
    })
  }
  return catArray
}

class App extends Component {


  updateState(){
    this.setState({money: window.money, currentLocation:window.currentLocation})

  }

  updateLocation(){
    window.catsForSale = generateCats(3)
    window.myCats.forEach(cat => cat.price = locations[window.currentLocation].algorithm(cat))
    this.updateState()
  }

  constructor(props) {
    super(props)
    window.stateManager = new StateManager()

    window.currentLocation= 'Melbourne'
    window.currentDate=moment("2000-01-01")
    window.money = 500
    window.myCats = []
    window.catsForSale = generateCats(3)
    console.log("app catsForSale", window.catsForSale)
    this.updateState = this.updateState.bind(this)

    window.stateManager.callbacks.push(this.updateState)
    window.locationManager = new StateManager()
    this.updateLocation= this.updateLocation.bind(this)
    window.locationManager.callbacks.push(this.updateLocation)


  }

  render() {


    console.log("app money", window.money)
    console.log("app catsForSale", window.catsForSale)

    let panes = [
  { menuItem: 'For Sale', render: () => <Tab.Pane><CatsForSalePage/></Tab.Pane> },
  { menuItem: 'My Cats', render: () => <Tab.Pane><MyCatsPage/></Tab.Pane> },
  { menuItem: 'Travel', render: () => <Tab.Pane><TravelPage/></Tab.Pane> },
]
    return (

    <div style={{fontSize:0, margin:14}}>
    <Header  floated='left' as='h1' style={{width:100}}>
    ${window.money}
    <Header.Subheader>{window.currentLocation} </Header.Subheader>
    </Header>
    <Header floated='right' as='h1' style={{width:200}}>
    {window.currentDate.format('Do MMMM')}
    </Header>
    <Tab panes={panes} />

    </div>

    );
  }
}





export default App;
