import React, { Component } from 'react';
import CatProfile from './CatProfile.js';
import { Button } from 'semantic-ui-react'

class ForSaleCatProfile extends Component{
  constructor(props){
    super(props)
    this.data = props.injected ? props.injected : window
    this.sellCat = this.sellCat.bind(this)
  }


  sellCat() {
    console.log("selling cat: ", this.props.cat.name)
    console.log("my cats before: ", this.data.myCats)
    this.data.myCats.push(this.props.cat)
    this.data.catsForSale = this.data.catsForSale.filter(cat => cat.id !== this.props.cat.id)
    this.data.money -= this.props.cat.price
    console.log("my cats after: ", this.data.myCats)
    if (this.data.stateManager) this.data.stateManager.updateState();
  }

  render(){
    const forSaleButton = <Button floated='right' onClick = {this.sellCat}> BUY </Button>
    return (
      <CatProfile cat={this.props.cat} button = {forSaleButton}/>
    )
  }
}

export default ForSaleCatProfile
