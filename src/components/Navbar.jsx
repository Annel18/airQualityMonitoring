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
            <InputLabel id="demo-simple-select-autowidth-label">Feed Type</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={redirection}
              onChange={handleChange}
              autoWidth
              label="Feed Type"
              >
              <MenuItem
                as={Link}
                to="/"
                className='navbar-drop'
                value={'Real-Time'}
                >Real-Time</MenuItem>
              <MenuItem
                as={Link}
                to="/forecast/"
                className='navbar-drop'
                value={'Forecast'}
                >Forecast</MenuItem>
            </Select>
          </FormControl>
        </div>
      </nav >
    </header >
  )
}