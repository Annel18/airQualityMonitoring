export default function Footer() {

  // this array of objects my have to be moved in App.jsx instead and passed through with props.. depending further development and if needed for other components
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

  const aqiColorKey = [
    { aqi: '0 - 25', backgroundColor: '#00787d', textColor:'white' },
    { aqi: '25 - 50', backgroundColor: '#009b67', textColor:'white' },
    { aqi: '50 - 75', backgroundColor: '#7fbe54', textColor:'black' },
    { aqi: '75 - 100', backgroundColor: '#ffde4c', textColor:'black' },
    { aqi: '100 - 125', backgroundColor: '#ffbb46', textColor:'black' },
    { aqi: '125 - 150', backgroundColor: '#ff9643', textColor:'black' },
    { aqi: '150 - 175', backgroundColor: '#eb4a3b', textColor:'white' },
    { aqi: '175 - 200', backgroundColor: '#d1003a', textColor:'white' },
    { aqi: '200 - 300', backgroundColor: '#9c0067', textColor:'white' },
    { aqi: '300 - 400', backgroundColor: '#7c003f', textColor:'white' },
    { aqi: '>400', backgroundColor: '#510017', textColor:'white' },
  ]

  return (
    <footer>
      <div className="levels-key">
        {aqiColorKey.map((level,i) => {
          return (
            <p key={i} className="levels-aqi"
              style={{ backgroundColor: level.backgroundColor, color: level.textColor }}
            >{level.aqi}</p>
          )
        })
        }
      </div>
      <nav className="footer-nav">
      <p>|</p>
        <a href="">About </a>
        <p>|</p>
        <a href="">Resources</a>
        <p>|</p>
        <a href="">Source Code</a>
        <p>|</p>
      </nav>
    </footer>
  )
}