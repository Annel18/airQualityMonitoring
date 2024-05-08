import { FC } from 'react';
// import airQualityLevels from '../../assets/data/airQualityLevels';
import aqiColorKey from '../../assets/data/aqiColorKey';

interface Level {
    aqi: string;
    backgroundColor: string;
    textColor: string;
}

const Footer: FC = () => {
    return (
        <footer>
            <div className="levels-key">
                {aqiColorKey.map((level: Level, i: number) => {
                    return (
                        <p
                            key={i}
                            className="levels-aqi"
                            style={{ backgroundColor: level.backgroundColor, color: level.textColor }}
                        >{level.aqi}</p>
                    );
                })}
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
    );
}

export default Footer;
