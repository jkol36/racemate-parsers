global.Promise = require('bluebird')
import dropbox from 'dropbox'
import csv2json from 'csv2json'
import fs from 'fs'
import moment from 'moment'
import { raceFactory } from './helpers'
import { mockPreset } from './mockPreset'
import {expect} from 'chai'




const convertCsvToJson = (filename, csv) => {
    return Promise.resolve(fs.createReadStream(csv)
    .pipe(csv2json({
      separator: ','
    }))
    .pipe(fs.createWriteStream(`${filename}.json`)))
}

const openResultJsonFile = () => {
  return new Promise(resolve => {
    let json = require('./results.json')
    resolve(json)
  })
}
const openFieldsJsonFile = () => {
  return new Promise(resolve => {
    let json = require('./fields.json')
    resolve(json)
  })
}

const isValid = (preset, race) => {
  const {race_criteria, horse_criteria} = preset
  const {
    race_distance: {min, max}, 
    blinkers_on,
    condition_age,
    condition_class,
    condition_sex,
    condition_weight,
    race_starters,
    meeting_is_night,
    apprentices_can_claim,
    race_min_hcp_weight,
    venue_state,
    venue_name
  } = race_criteria
  return (
    (venue_state != undefined ? race.venue_state === venue_state: true) &&
    (venue_name != undefined ? race.venue_name === venue_name: true) &&
    (blinkers_on != undefined ? race.blinkers_on === blinkers_on: true) && //
    (race_min_hcp_weight != undefined ? race_min_hcp_weight <= +race.race_min_hcp_weight: true) &&
    (race_starters != undefined ? race_starters === +race.race_starters: true) && //
    (condition_age != undefined ? race.condition_age === condition_age: true) &&
    (condition_class != undefined ? race.condition_class === condition_class: true) &&
    (condition_sex != undefined ? race.condition_sex === condition_sex: true) &&
    (condition_weight != undefined ? +race.condition_weight === +condition_weight: true) &&
    (apprentices_can_claim != undefined ? race.condition_jockey.apprentices_can_claim === apprentices_can_claim: true) &&
    (meeting_is_night != undefined ? race.meeting_is_night === meeting_is_night: true)//
  )
  
}



openResultJsonFile().then(races => {
  // let valid = isValid(mockPreset, raceFactory(races[0]))
  // console.log(valid)
  // console.log(raceFactory(races[0]))
  //console.log(raceFactory(races[0]))
  let validRaces = races.map(race => raceFactory(race)).filter(race => isValid(mockPreset, race) === true)
  console.log(validRaces.length)
  //console.log(validRaces.map(race => race.blinkers_on)) //should be false

})


