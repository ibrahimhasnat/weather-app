"use client"

import { useState } from 'react'
import Search from './components/Search'
import NotFound from './components/NotFound'
import WeatherDetails from './components/WeatherDetails'
import { Toaster } from 'react-hot-toast'

export default function Home() {

  const [weatherData, setWeatherData] = useState(null)
  const [isError, setIsError] = useState(false)
  const [expand, setExpand] = useState(false)

  const handleInputText = async (location) => {

    try {

      const API_KEY = process.env.NEXT_PUBLIC_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
      
      const response = await fetch(url)
      const data = await response.json()
      setWeatherData(data)

      setExpand(true)

      if (weatherData.cod === 404) {
        setIsError(true)
      }

    } catch (error) {
      setIsError(true)
    }

  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-neutral-900'>
      <Toaster />
      <div className={`
        bg-neutral-200
        xl:w-3/12
        lg:w-4/12
        md:w-5/12
        w-10/12
        p-6
        rounded-md
        shadow-md
        ${(expand) && 'min-h-[500px]'}      
      `}>

        <Search handleInputText={handleInputText} />
        {
          (weatherData && weatherData.cod === 200) ? <WeatherDetails details={weatherData} /> : (isError) && <NotFound />
        }
        
      </div>

    </div>
  )
}
