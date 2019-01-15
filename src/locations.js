export const locations = {
  'Melbourne':{
  calcPrice:(cat) => cat.cuteness/5,
  connections: {'Canberra':1, 'Adelaide':1, 'Launceston':2}
},

'Adelaide':{
calcPrice:(cat) => cat.intelligence/5,
connections:{'Perth':6, 'Alice Springs':5, 'Melbourne':1}
},
'Brisbane':{
calcPrice:(cat) => cat.aggression/5,
connections:{'Sydney':3}
},
'Perth':{
calcPrice:(cat) => cat.energy/5,
connections:{'Alice Springs': 5, 'Adelaide': 6}

},
'Darwin':{
calcPrice:(cat) => 1,
connections:{}
},
'Alice Springs':{
calcPrice:(cat) => cat.cuteness/7,
connections:{'Perth':5, 'Adelaide':5,}
},
'Sydney':{
calcPrice:(cat) => cat.affection/4,
connections:{'Canberra':1, 'Brisbane':3}
},
'Canberra':{
calcPrice:(cat) => cat.cuteness/4,
connections:{'Sydney':1, 'Melbourne':2 }
},
'Hobart':{
calcPrice:(cat) => cat.intelligence/2,
connections:{'Launceston':1}
},
'Launceston':{
calcPrice:(cat) => cat.intelligence/8,
connections:{'Hobart':1, 'Melbourne': 2}
}

}
