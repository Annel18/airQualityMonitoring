import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

export default function Navbar() {
  //! States
  const [redirection, setRedirection] = useState('')
  const [accountDrop, setAccoutDrop] = useState('')

  //! Functions
  const handleChangeAccount = (event) => {
    setAccoutDrop(event.target.value)
    setRedirection('')
}

  const handleChange = (event) => {
    setRedirection(event.target.value)
    setAccoutDrop('')
  }

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-menu">
          <Link className="navbar-button" to="/" onClick={handleChange}>Air Quality App</Link>
        </div>
        <div className='navbar-drop'>
          <FormControl sx={{ m: 1, minWidth: 160 }}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{ fontFamily: 'Termina Test', color: 'white', fontWeight: '500', fontSize: 'small' }}>Real-Time</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={accountDrop}
              onChange={handleChangeAccount}
              autoWidth
              label="register"
              placeholder="Register/Sign in"
            >
              <MenuItem value=""><em>Settings</em></MenuItem>
              <MenuItem as={Link} style={{ fontFamily: 'Termina Test', color: 'lightcoral' }} to="/real-time/" value={"register"}>Real-Time</MenuItem>
              <MenuItem as={Link} style={{ fontFamily: 'Termina Test', color: 'lightcoral' }} to="/forecast/" value={"login"}>Forecastt</MenuItem>
            </Select>
          </FormControl>
        </div>
      </nav>
    </header>
  )
}