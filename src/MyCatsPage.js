import React, { Component } from 'react';
import CatProfile from './CatProfile.js';
import { Grid } from 'semantic-ui-react'
import { generateName } from './NameGenerator.js'
class MyCatsPage extends Component {
  generateCats(num) {
    let catArray = []
    for (var i = 0; i < num; i++) {
      catArray.push({
        id: i,
        name: generateName(),
        cuteness: Math.floor(Math.random() * 100),
        aggression: Math.floor(Math.random() * 100),
        intelligence: Math.floor(Math.random() * 100),
        energy: Math.floor(Math.random() * 100),
        affection:Math.floor(Math.random() * 100)
      })
    }
    return catArray
  }

  render() {

    let colors = this.generateCats(13)
    return (
      <Grid columns={5}>
      {colors.map(cat => (
      <Grid.Column key = {cat.id} >
        <CatProfile cat = {cat} />
      </Grid.Column>

    ))}
  </Grid>
    );
  }

}
export default MyCatsPage;
