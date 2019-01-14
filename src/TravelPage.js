import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
class TravelPage extends Component {


  constructor(props){
    super(props)
    this.data = props.injected ? props.injected : window

  }




  render(){
    return (
      <>
        <TravelButton data={this.data} city='Melbourne'/>
        <TravelButton data={this.data} city='Geelong'/>

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
    if (this.props.data.locationManager) this.props.data.locationManager.updateState();
  }
  render(){
    return(
    <Button onClick={this.go}> {this.props.city} </Button>
  )
  }
}
