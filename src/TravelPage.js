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
      {Object.keys(locations).map(city => <TravelButton data={this.data} city={city}/>)}

      </>
    )
  }
}


export default TravelPage

class TravelButton extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.go = this.go.bind(this)
  }
  go(){
    console.log("going", this.props.data.currentLocation, this.props.city)
    this.props.data.currentLocation = this.props.city
    this.props.data.currentDate = this.props.data.currentDate.add(1, 'd')
    if (this.props.data.locationManager) this.props.data.locationManager.updateState();
  }
  render(){
    return(
    <Button disabled={this.props.city===this.props.data.currentLocation} onClick={this.go}> {this.props.city} </Button>
  )
  }
}
