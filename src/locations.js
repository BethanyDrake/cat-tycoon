export const locations = {
  'Melbourne':{
  calcPrice:(cat) => cat.cuteness/5
},

'Geelong':{
calcPrice:(cat) => cat.affection/5
},
'Adelaide':{
calcPrice:(cat) => cat.intelligence/5
},
'Brisbane':{
calcPrice:(cat) => cat.aggression/5
},
'Perth':{
calcPrice:(cat) => cat.energy/5
},
'Darwin':{
calcPrice:(cat) => 1
},
'Alice Springs':{
calcPrice:(cat) => cat.cuteness/7
},
'Sydney':{
calcPrice:(cat) => cat.affection/4
},
'Canberra':{
calcPrice:(cat) => cat.cuteness/4
},
'Hobart':{
calcPrice:(cat) => cat.intelligence/2
},
'Launceston':{
calcPrice:(cat) => cat.intelligence/8
}

}
