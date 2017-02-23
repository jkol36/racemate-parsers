export const mockPreset = {
  race_criteria: {
    race_distance: {
      min: 1000,
      max: 10000
    },
    condition_class:25,
    condition_age: 2,
    condition_weight: 6,
    condition_sex:0,
    apprentices_can_claim: true,
    race_starters: 10,
    venue_state: 'WA',
    venue_name: 'Albany',
    race_min_hcp_weight:54,
    meeting_is_night: false,
    blinkers_on: true
  },
  horse_criteria: {
    horse_barrier_draw: 6,
    horse_sex: 'G', //stands for Gelding check horseSexLookup
    horse_won: '',
    horse_weight: 50
  }
}
