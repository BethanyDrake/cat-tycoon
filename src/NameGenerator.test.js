import {expect} from 'chai';
import { generateName } from './NameGenerator.js'

describe("name generator", () => {
  it ("should make some names that look right", ()=>{
    console.log(generateName())
    console.log(generateName())
    console.log(generateName())
    console.log(generateName())
  });

});
