const airQualityLevels = [
  {
    aqi: '0 - 50',
    airPollutionLevel: 'Good',
    healthImplications: 'Air quality is considered satisfactory, and air pollution poses little or no risk',
    cautionaryStatement: 'None'
  }, {
    aqi: '51 - 100',
    airPollutionLevel: 'Moderate',
    healthImplications: 'Air quality is acceptable; however, for some polluants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
    cautionaryStatement: 'Active children and adults, and people with respiratory dicease, such as asthma, should limit prolonged outdoor exertion.'
  }, {
    aqi: '101 - 150',
    airPollutionLevel: 'Unhealthy for Sensitive Groups',
    healthImplications: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected',
    cautionaryStatement: 'Active children and adults, and people with respiratory dicease, such as asthma, should limit prolonged outdoor exertion.'
  }, {
    aqi: '151 - 200',
    airPollutionLevel: 'Unhealthy',
    healthImplications: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects',
    cautionaryStatement: 'Active children and adults, and people with respiratory dicease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion'
  }, {
    aqi: '201 - 300',
    airPollutionLevel: 'Very Unhealthy',
    healthImplications: 'Health warnings of emergency conditions. The entire population is more likely to be affected',
    cautionaryStatement: 'Active children and adults, and people with respiratory dicease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.'
  }, {
    aqi: '300+',
    airPollutionLevel: 'Hazardous',
    healthImplications: 'Health alert; everyone may experience more serious health effects',
    cautionaryStatement: 'Everyone should avoid all outdoor exertion.'
  }
]

export default airQualityLevels