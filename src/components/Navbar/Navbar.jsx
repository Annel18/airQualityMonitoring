import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import { Link } from "react-router-dom"
import { useState } from 'react'

export default function Navbar() {
  //! States
  const [redirection, setRedirection] = useState('Real-Time')

  //! Functions
  const handleChange = (event) => {
    setRedirection(event.target.value)
  }

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-button">Air Quality App</div>
        </div>
        <div className='navbar-menu'>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel
              id="demo-simple-select-autowidth-label"
              style={{ fontFamily: 'Futura', fontSize: 'x-large', color: 'white' }}
            >Feed Type</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={redirection}
              onChange={handleChange}
              autoWidth
              label="Feed Type"
              // placeholder="Real-Time"
              style={{ fontFamily: 'Futura', fontSize: 'xx-large', fontWeight: '800', color: 'white' }}
            >
              <MenuItem
                as={Link}
                to="/"
                className='navbar-drop'
                value={'Real-Time'}
                style={{ fontFamily: 'Futura', fontSize: 'xx-large', fontWeight: '800' }}
              >Real-Time</MenuItem>
              <MenuItem
                as={Link}
                to="/forecast/"
                className='navbar-drop'
                value={'Forecast'}
                style={{ fontFamily: 'Futura', fontSize: 'xx-large', fontWeight: '800' }}
              >Forecast</MenuItem>
            </Select>
          </FormControl>
        </div>
      </nav >
    </header >
  )
}