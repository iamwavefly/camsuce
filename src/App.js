import React, { useState } from 'react'
import Axios from 'axios'
import Join from './component/Join'

function App() {
  const [userCity, setUserCity] = useState('nearby')
  const locateUser = () => {
    Axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=24a90d2d25d846e288c329787274ba43')
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
