import React, { Component } from 'react';
import CatProfile from './CatProfile.js';
import { Button } from 'semantic-ui-react'

class ForSaleCatProfile extends Component{
  constructor(props){
    super(props)
    this.data = props.injected ? props.injected : window
    this.sellCat = this.sellCat.bind(this)
    this.getButton = this.getButton.bind(this)
    this.state = {sold:false}
  }


  sellCat() {

    this.data.myCats.push(this.props.cat)
    this.data.catsForSale = this.data.catsForSale.filter(cat => cat.id !== this.props.cat.id)
    this.data.money -= this.props.cat.price
    
    if (this.data.stateManager) this.data.stateManager.updateState();
    this.setState({sold:true})
  }

  getButton(){
    if (this.state.sold) return (<Button floated='right' disabled> SOLD </Button>)
    return (<Button floated='right' onClick = {this.sellCat}> BUY </Button>)
  }

  render(){
    return (
      <CatProfile cat={this.props.cat} button = {this.getButton()}/>
    )
  }
}

export default ForSaleCatProfile
