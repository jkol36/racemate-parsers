export const conditionWeightLookup = {
  0: 'Set Weight With Penalties',
  1: 'Set Weight Handicap',
  2: 'Set Weight',
  3: 'Weight For Age',
  4: 'Quality',
  5: 'Set Weight With Allowances',
  6: 'Handicap'
}

export const conditionSexLookup = {
  0: '',
  1: 'Fillies & Mares',
  2: 'Mares',
  3: 'Colts, Horses & Geldings',
  4: 'Fillies'
}
export const conditionSexConverter = {
  '': 0,
  'Fillies & Mares': 1,
  'Mares': 2,
  'Colts, Horses & Geldings': 3,
  'Fillies': 4

}
export const conditionWeightConverter = {
   'Set Weight With Penalties':0,
   'Set Weight Handicap':1,
   'Set Weight':2,
   'Weight For Age':3,
   'Quality':4,
   'Set Weight With Allowances':5,
   'Handicap': 6
}

export const conditionClassLookup = {
  0: 'Bencmark 45',
  1: 'Benchmark 50',
  2: 'Benchmark 55',
  3: 'Benchmark 58',
  4: 'Benchmark 60',
  5: 'Benchmark 64',
  6: 'Benchmark 65',
  7: 'Benchmark 66',
  8: 'Benchmark 67',
  9: 'Benchmark 68',
  10: 'Benchmark 70',
  11: 'Benchmark 72',
  12:'Benchmark 73',
  13: 'Benchmark 75',
  14: 'Benchmark 76',
  15: 'Benchmark 77',
  16: 'Benchmark 78',
  17: 'Benchmark 82',
  18: 'Benchmark 83',
  19:'Benchmark 84',
  20: 'Maiden',
  21: 'Class 1',
  22: 'Class 2',
  23: 'Class 3',
  24: 'Class 4',
  25: 'Class 5',
  26: 'Class 6',
  27: 'Class B',
  28: 'Bm56+',
  29: 'Bm58+',
  30: 'Bm66+',
  31: 'Bm68',
  32: 'Bm72+',
  33: 'Open',
  34: 'Restricted 58',
  35: 'Restricted 60',
  36: 'Restricted 64',
  37: 'Restricted 70',
  38: 'Rest 0 Metro Wins',
  39: 'Rest 1 Metro win',
  40: 'Benchmark 63',
  41: 'Benchmark 93',
  42: 'Benchmark 85',
  43: 'Restricted'

}


//we'll do the samething for object values
export const raceValueLookup = {
  'FALSE':false,
  'TRUE':true,
  'Set weight with penalties': 0,
  'Handicap': 1,
  'Set weight': 2,
  'Weight for age': 3,
  'Benchmark 45': 0,
  'Benchmark 50': 1,
  'Benchmark 55': 2,
  'Benchmark 58': 3,
  'Benchmark 60': 4,
  'Benchmark 64': 5,
  'Benchmark 65': 6,
  'Benchmark 66': 7,
  'Benchmark 67': 8,
  'Benchmark 68': 9,
  'Benchmark 70': 10,
  'Benchmark 72': 11,
  'Benchmark 73': 12,
  'Benchmark 75': 13,
  'Benchmark 76': 14,
  'Benchmark 77': 15,
  'Benchmark 78': 16,
  'Benchmark 82': 17,
  'Benchmark 83': 18,
  'Benchmark 84': 19,
  'Maiden':20,
  'Class 1': 21,
  'Class 2': 22,
  'Class 3': 23,
  'Class 4': 24,
  'Class 5': 25,
  'Class 6': 26,
  'Class B': 27,
  'Bm56+': 28,
  'Bm58+': 29,
  'Bm66+': 30,
  'Bm68+': 31,
  'Bm72+': 32,
  'Open': 33,
  'Restricted 58': 34,
  'Restricted 60': 35,
  'Restricted 64': 36,
  'Restricted 70': 37,
  'Rest 0 Metro Wins': 38,
  'Rest 1 Metro Win': 39,
  'Benchmark 63': 40,
  'Benchmark 93': 41,
  'Benchmark 85': 42,
  'Restricted': 43,
}

//takes a race object and returns a new object with it's properties slightly modified
//for instance an attribute on race might be set to FALSE we want to set that attribute to false instead
export const raceFactory = (race) => {
  //we're going to define the property names that need to change, and the value that should be replaced with
  const racePropertyLookup = {
    'condition_age': +race.condition_age.split('yo')[0],
    'blinkers_on': race.blinkers_on === '' ? false: raceValueLookup[race.blinkers_on],
    'condition_jockey': {
      apprentices_can_claim: race.condition_jockey === 'Apprentices Can Claim',
      amateur_riders: race.condition_jockey === 'Amateur Riders'
    },
    condition_weight: conditionWeightConverter[race.condition_weight],
    condition_sex: conditionSexConverter[race.condition_sex]
  }
  let newRace = {}
  Object.keys(race).forEach(k => {
   let result = raceValueLookup[race[k]]
   let result2 = racePropertyLookup[k]
   if(result2 != undefined) {
      newRace[k] = result2
   }
   else if(result != undefined) {
    newRace[k] = result

   }
   else {
    newRace[k] = race[k] 
   }
  })
  return newRace
  

}