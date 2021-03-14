import React, { useState } from 'react'
import Axios from 'axios'
import Join from './component/Join'

function App() {
  const [userCity, setUserCity] = useState('nearby')
  const locateUser = () => {
    Axios.get('https://ip-api.com/json/')
    .then(data => {
      const userCurrentCity = data.data.city
      setUserCity(userCurrentCity)
    })
  }
  locateUser()

  return (
    <div>
      <Join userCity={userCity}/>
    </div>
  )
}

export default App
