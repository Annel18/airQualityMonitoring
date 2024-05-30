import { useState } from "react";
import { Link } from 'react-router-dom';
import aqiColorKey from '../../assets/data/aqiColorKey';
import ModalAqi from '../ModalAqi/index';

export interface KeyLevel {
  aqi: string;
  backgroundColor: string;
  textColor: string;
  level: {
    aqi: string;
    airPollutionLevel: string;
    healthImplications: string;
    cautionaryStatement: string;
  };
}

export default function Footer() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<KeyLevel | null>(null);

  const handleOpen = (level: KeyLevel) => {
    setSelectedLevel(level);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <footer>
      <div className="levels-key">
        {aqiColorKey.map((level: KeyLevel, i: number) => (
          <div key={i} className="levels-aqi">
            <button
              style={{ backgroundColor: level.backgroundColor, color: level.textColor }}
              data-testid="aqi-level"
              onClick={() => handleOpen(level)}
            >
              {level.aqi}
            </button>
          </div>
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
      {selectedLevel && (
        <ModalAqi open={open} handleClose={handleClose} level={selectedLevel} />
      )}
    </footer>
  );
}
