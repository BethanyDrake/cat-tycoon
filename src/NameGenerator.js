export const generateName = function(){
  return startingSounds.random() + vowels.random() + midSounds.random() + endings.random()
}

// eslint-disable-next-line
Array.prototype.random = function () {
    let num = Math.floor(Math.random() * this.length);
    return this[num]
};

const startingSounds = [
  "b",
  "t",
  "d",
  "sh",
  "k",
  "y",
  "m",
  "c",
  "f",
  "h",
  "j",
  "l",
  "m",
  "n",
  "p",
  "r",
  "pr",
  "tr",
  "gr",
  "fr",
  "kr",
  "w",

]

const midSounds = [
  "bb",
  "tt",
  "dd",
  "sh",
  "ck",
  "l",
  "b",
  "t",
  "d",
  "dg",
  "w",
  "x"

]

const vowels = [
  "a",
  "ou",
  "i",
  "ar",
  "ei",
  "e",
  "u",
  "ai",
  "ir"
]

const endings = [
  "a",
  "i",
  "ar",
  "ie",
  "y",
  "etta",
  "er",
  "o",
  "el",
  "les"
]
