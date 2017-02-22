import { expect } from 'chai'
import { 
  conditionClassLookup,
  conditionWeightLookup,
  raceValueLookup,
  raceFactory
} from './helpers'
import { mockPreset } from './mockPreset'

describe('helpers', () => {
  it('should convert Set weight with penalties to 0', done => {
    let result = raceValueLookup['Set weight with penalties']
    expect(result).to.eq(0)
    done()
  })
  it('should return a new race object', done => {
    let mockRace = {
      "curr_meeting_date":"21/05/2016",
      "curr_venue_name":"Rosehill",
      "curr_race_number":"9",
      "curr_tab_number":"14",
      "horse_name":"Final Decision",
      "meeting_date":"9/01/2016",
      "venue":"Canterbury",
      "rail_position":"TRUE",
      "race_number":"4",
      "race_name":"McGrath Estate Agents (Bm83)",
      "condition_age":"3yo+",
      "condition_jockey":"Apprentices Can Claim",
      "condition_sex":"",
      "condition_class":"Benchmark 83",
      "condition_weight":"Handicap",
      "condition_group":"",
      "race_record":"",
      "starters":"6",
      "margin_1":"SHH",
      "margin_2":"1.5",
      "race_duration":"95.93",
      "sectional_distance":"600",
      "sectional_time":"35.13",
      "barrier":"4",
      "jockey":"J Taylor",
      "abnormal_finish":"",
      "position_finish":"4",
      "position_1200m":"",
      "position_800m":"4",
      "position_400m":"4",
      "position_settling":"5",
      "blinkers_on":"FALSE",
      "favourite":"FALSE",
      "dead_heat":"FALSE",
      "margin":"3",
      "weight_carried":"54",
      "weight_adjustment":"-3",
      "stewards_report":"",
      "g1_barrier":"3",
      "pg1_position":"1",
      "pg1_dead_heat":"FALSE",
      "pg1_horse":"Marenostro",
      "pg1_jockey":"S Clipperton",
      "pg1_country":"NZ","pg1_weight":"59.5",
      "pg1_margin":"0.1",
      "pg2_barrier":"5",
      "pg2_position":"2",
      "pg2_dead_heat":"FALSE",
      "pg2_horse":"Cauthen's Power",
      "pg2_jockey":"A Adkins",
      "pg2_country":"NZ",
      "pg2_weight":"53.5",
      "pg2_margin":"0.1",
      "pg3_barrier":"1",
      "pg3_position":"3",
      "pg3_dead_heat":"FALSE",
      "pg3_horse":"Zin Zan Eddie",
      "pg3_jockey":"K Jennings",
      "pg3_country":"AUS",
      "pg3_weight":"58",
      "pg3_margin":"1.6",
      "dslr":"21"}
    let newRace = raceFactory(mockRace)
    const {condition_class} = newRace
    expect(condition_class).to.eq(9)
    done()
  })

})

