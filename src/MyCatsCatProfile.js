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
    console.log("selling cat: ", this.props.cat.name)
    console.log("my cats before: ", this.data.myCats)
    this.data.catsForSale.push(this.props.cat)
    this.data.myCats = this.data.myCats.filter(cat => cat.id !== this.props.cat.id)
    this.data.money += this.props.cat.price
    if (this.data.stateManager) this.data.stateManager.updateState()
    console.log("my cats after: ", this.data.myCats)
    this.setState({sold: true})
  }

  getButton(){
    if (this.state.sold) return (<Button floated='right' disabled> SOLD </Button>)
    return (<Button floated='right' onClick = {this.sellCat}> SELL </Button>)
  }

  render(){
    //const sellButton = <Button floated='right' onClick = {this.sellCat}> SELL </Button>
    console.log("rendering", this.props.cat.name)
    return (
      <CatProfile cat={this.props.cat} button = {this.getButton()}/>
    )
  }
}

export default MyCatsCatProfile
