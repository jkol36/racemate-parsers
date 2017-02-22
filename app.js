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
    apprentices_can_claim
  } = race_criteria
  expect(race.blinkers_on).to.be.a('boolean')
  expect(blinkers_on).to.be.a('boolean')
  expect(race.condition_class).to.be.a('number')
  expect(+race.race_distance).to.be.a('number')
  expect(+race.race_starters).to.be.a('number')
  expect(race.meeting_is_night).to.be.a('boolean')
  expect(race_starters).to.be.a('number')
  expect(+race.race_starters).to.be.a('number')
  expect(race.condition_weight).to.be.a('number')
  expect(race.condition_age).to.be.a('number')
  expect(condition_weight).to.be.a('number')
  expect(race.condition_sex).to.be.a('number')
  return (
    +race.race_distance > min &&
    +race.race_distance <= max &&
    race.blinkers_on === blinkers_on &&
    race.condition_age === condition_age &&
    race.condition_class === condition_class &&
    race.condition_sex === condition_sex &&
    +race.condition_weight === +condition_weight &&
    race.condition_jockey.apprentices_can_claim === apprentices_can_claim &&
    +race.race_starters === race_starters &&
    race.meeting_is_night === meeting_is_night
    )
}


openResultJsonFile().then(races => {
  let validRaces = races.map(race => raceFactory(race)).filter(race => isValid(mockPreset, race))
  console.log(validRaces.length)

})


