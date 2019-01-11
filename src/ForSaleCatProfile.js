import React, { Component } from 'react';
import CatProfile from './CatProfile.js';
import { Button } from 'semantic-ui-react'

class ForSaleCatProfile extends Component{
  sellCat(cat){return () => {
    console.log("selling cat: ", cat.name)
  }}

  render(){
    const forSaleButton = <Button floated='right' onClick = {this.sellCat(this.props.cat)}> BUY </Button>
    return (
      <CatProfile cat={this.props.cat} button = {forSaleButton}/>
    )
  }
}

export default ForSaleCatProfile
