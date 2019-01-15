import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {locations} from './locations.js'
class TravelPage extends Component {


  constructor(props){
    super(props)
    this.data = props.injected ? props.injected : window
  }




  render(){
    return (
      <>
      {Object.keys(locations).map(city => <TravelButton data={this.data} city={city} key={city}/>)}

      </>
    )
  }
}


export default TravelPage

class TravelButton extends Component {
  constructor(props){
    super(props)
    this.go = this.go.bind(this)

  }
  go(){
    let currentLocation = this.props.data.currentLocation
    this.props.data.currentLocation = this.props.city
    let distance = locations[currentLocation].connections[this.props.city]
    this.props.data.currentDate = this.props.data.currentDate.add(distance, 'd')
    if (this.props.data.dateManager) this.props.data.dateManager.updateState();
    if (this.props.data.locationManager) this.props.data.locationManager.updateState();
  }
  render(){
    let currentLocation = this.props.data.currentLocation
    var distance = locations[currentLocation].connections[this.props.city]
    let isCurrentCity = this.props.city===this.props.data.currentLocation
    if (isCurrentCity) distance = 0;
    var unit = "days"
    if (distance === 1) unit = "day"
    var toWrite;
    if (distance === undefined) {
      unit = ""
      toWrite = ""
    }else{
      toWrite = " ("+distance + ' ' + unit +")"
    }
    let reachable = distance !== undefined ? true : false

    //if (!reachable || isCurrentCity) return(<></>)
    return(
    <Button disabled={!reachable || isCurrentCity} onClick={this.go}> {this.props.city}{toWrite} </Button>
  )
  }
}
