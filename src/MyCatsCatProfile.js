import React, { Component } from 'react';
import CatProfile from './CatProfile.js';
import { Button } from 'semantic-ui-react'

class MyCatsCatProfile extends Component{
  constructor(props){
    super(props)
    this.data = props.injected ? props.injected : window
    this.sellCat = this.sellCat.bind(this)
    this.state = {sold:false}
    this.getButton = this.getButton.bind(this)
  }


  sellCat() {

    this.data.catsForSale.push(this.props.cat)
    this.data.myCats = this.data.myCats.filter(cat => cat.id !== this.props.cat.id)
    this.data.money += this.props.cat.price
    if (this.data.stateManager) this.data.stateManager.updateState()

    this.setState({sold: true})
  }

  getButton(){
    if (this.state.sold) return (<Button floated='right' disabled> SOLD </Button>)
    return (<Button floated='right' onClick = {this.sellCat}> SELL </Button>)
  }

  render(){
    //const sellButton = <Button floated='right' onClick = {this.sellCat}> SELL </Button>

    return (
      <CatProfile cat={this.props.cat} button = {this.getButton()}/>
    )
  }
}

export default MyCatsCatProfile
