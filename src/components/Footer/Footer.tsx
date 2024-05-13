import { FC } from 'react'
import { Link } from 'react-router-dom'
import aqiColorKey from '../../assets/data/aqiColorKey'

interface Level {
  aqi: string;
  backgroundColor: string;
  textColor: string;
  level: object;
}

export default function Footer() {
  return (
    <footer>
      <div className="levels-key">
        {aqiColorKey.map((level: Level, i: number) => (
          <p
            key={i}
            className="levels-aqi"
            style={{ backgroundColor: level.backgroundColor, color: level.textColor }}
            data-testid="aqi-level" // Add data-testid here
          >
            {level.aqi}
          </p>
        ))}
      </div>
      <nav className="footer-nav">
        <p>|</p>
        <Link to="/About/">About</Link>
        <p>|</p>
        <Link to="/Resources/">Resources</Link>
        <p>|</p>
        <a href="https://github.com/Annel18/air-quality-monitoring" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
        <p>|</p>
      </nav>
    </footer>
  );
}
