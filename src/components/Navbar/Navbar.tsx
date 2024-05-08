import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const [redirection, setRedirection] = useState<string>('real-time')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRedirection(event.target.value)
    navigate(event.target.value)
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-button">Air Quality App</div>
        </div>
        <div className='navbar-menu'>
          <div className="form-control">
            <select
              id="feed-type"
              value={redirection}
              onChange={handleChange}
              className="select"
            >
              <option value="/">Real-Time</option>
              <option value="/forecast">Forecast</option>
            </select>
            <label htmlFor="feed-type" className="input-label">Feed Type</label>
          </div>
        </div>
      </nav>
    </header>
  )
}
