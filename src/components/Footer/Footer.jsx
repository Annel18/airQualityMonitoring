import { Link } from "react-router-dom"

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
        <Link to="/About/">About </Link>
        <p>|</p>
        <Link to="/Resources/">Resources</Link>
        <p>|</p>
        <a href="https://github.com/Annel18/air-quality-monitoring" target="_blank">Source Code</a>
        <p>|</p>
      </nav>
    </footer>
  )
}