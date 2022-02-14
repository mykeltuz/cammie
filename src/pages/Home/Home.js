import React, {
  useEffect,
  useState,
} from 'react'
import {
  deviceDetect,
  osName
} from 'react-device-detect'
import Webcam from "react-webcam";

import './Home.css'

function Home (props) {
  const [device_os_name, setDeviceOsname] = useState('Pristine OS')

  useEffect(() => {
    setDeviceOsname(osName)
  }, [])

  const videoConstraints = {
    facingMode: "user"
  };

  return (
    <div data-testid="Home" className='container'>
      <h1 data-testid="home-page-title">Cammie</h1>

      <Webcam 
        videoConstraints={videoConstraints}
      />

      <div className='device-info'>
        <p className='device-os-name'>
          Device Model: {device_os_name}
        </p>
      </div>
    </div>
  )
}

export default Home
