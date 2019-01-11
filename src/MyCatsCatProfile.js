import React, { Component } from 'react';
import CatProfile from './CatProfile.js';
import { Button } from 'semantic-ui-react'

class MyCatsCatProfile extends Component{
  constructor(props){
    super(props)
    this.data = props.injected ? props.injected : window
    this.sellCat = this.sellCat.bind(this)
  }


  sellCat() {
    console.log("selling cat: ", this.props.cat.name)
    console.log("my cats before: ", this.data.myCats)
    this.data.catsForSale.push(this.props.cat)
    this.data.myCats = this.data.myCats.filter(cat => cat.id !== this.props.cat.id)
    console.log("my cats after: ", this.data.myCats)
  }

  render(){
    const sellButton = <Button floated='right' onClick = {this.sellCat}> SELL </Button>
    return (
      <CatProfile cat={this.props.cat} button = {sellButton}/>
    )
  }
}

export default MyCatsCatProfile
