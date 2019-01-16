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
      age: Math.floor(Math.random() * 19) +1,
    })
  }

  catArray.forEach(cat => cat.price = locations[window.currentLocation].calcPrice(cat))
  return catArray
}

class App extends Component {


  updateState(){
    this.setState({})

  }

  updateLocation(){
    window.catsForSale = generateCats(3)
    window.myCats.forEach(cat => cat.price = locations[window.currentLocation].calcPrice(cat))
    this.setState({})
  }
  updateDate(data){
    window.food -= window.myCats.length * data.daysPassed
    this.setState({})
  }

  constructor(props) {
    super(props)
    window.stateManager = new StateManager()

    window.currentLocation= 'Melbourne'
    window.currentDate=moment("2000-01-01")
    window.money = 500
    window.food = 50
    window.myCats = []
    window.catsForSale = generateCats(3)
    this.updateState = this.updateState.bind(this)

    window.stateManager.callbacks.push(this.updateState)
    window.locationManager = new StateManager()
    window.dateManager = new StateManager(window.currentDate)
    this.updateDate = this.updateDate.bind(this)
    window.dateManager.callbacks.push(this.updateDate)
    this.updateLocation= this.updateLocation.bind(this)
    window.locationManager.callbacks.push(this.updateLocation)


  }

  render() {


    let panes = [
  { menuItem: 'For Sale', render: () => <Tab.Pane><CatsForSalePage/></Tab.Pane> },
  { menuItem: 'My Cats', render: () => <Tab.Pane><MyCatsPage/></Tab.Pane> },
  { menuItem: 'Travel', render: () => <Tab.Pane><TravelPage/></Tab.Pane> },
]
    return (


    <div style={{fontSize:0, margin:14}}>

    <div style={{display:'flex', 'justifyContent':'space-between', 'alignItems':'baseline'}}>


    <Header as='h1'>
    ${window.money.toFixed(2)}
    <Header.Subheader>{window.currentLocation} </Header.Subheader>
    </Header>

    <Header as='h1'>
    Food: {window.food}
    <Header.Subheader style={{'textAlign':'center'}} >(-{window.myCats.length} per day)</Header.Subheader>
    </Header>

    <Header as='h1'>
    {window.currentDate.format('Do MMMM')}
    </Header>

    </div>
    <Tab panes={panes} />

    </div>

    );
  }
}





export default App;
