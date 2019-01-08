import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


import { imageSources } from './images.js'
class CatProfile extends Component {




  render() {

    if (this.props.cat === undefined) {
      return (<></>)
    }
    let imageSource = imageSources[this.props.cat.id % imageSources.length]
    return (<Card>
    <Image src={imageSource} resizemode='cover'/>
    <Card.Content>
      <Card.Header><div className = "card_header_name">{this.props.cat.name}</div></Card.Header>
      <Card.Meta>
        Age: 18
      </Card.Meta>
      <Card.Meta>
        Cuteness: {this.props.cat.cuteness}
      </Card.Meta>
      <Card.Meta>
        Intelligence: {this.props.cat.intelligence}
      </Card.Meta>
      <Card.Meta>
        Affection: {this.props.cat.affection}
      </Card.Meta>
      <Card.Meta>
        Energy: {this.props.cat.energy}
      </Card.Meta>
      <Card.Meta>
        Aggression: {this.props.cat.aggression}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
        <Icon name='money' />
        203.30
    </Card.Content>
  </Card>)
  }
}



export default CatProfile;
