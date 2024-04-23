import airQualityLevels from '../../assets/data/airQualityLevels.js'
import aqiColorKey from '../../assets/data/aqiColorKey.js'

export default function Footer() {

    return (
    <footer>
      <div className="levels-key">
        {aqiColorKey.map((level,i) => {
          return (
            <p 
              key={i} 
              className="levels-aqi"
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