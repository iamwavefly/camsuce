import React, { useState } from 'react'
import Axios from 'axios'
import Join from './component/Join'

function App() {
  const [userCity, setUserCity] = useState('nearby')
  const locateUser = () => {
    Axios.get('http://api.ipstack.com/check?access_key=56043ed5a2342068e55487cf4c4e7002')
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
