"use client"

import Image from 'next/image'
import InfoBox from './InfoBox'

const WeatherDetails = ({ details }) => {
  
  const { sys, main, weather, wind } = details

  const temperatureCelsius = main.temp - 273.15
  const feelsLikeInCelsius = main.feels_like - 273.15

  const sunriseDate = new Date((sys.sunrise) * 1000);
  const sunsetDate = new Date((sys.sunset) * 1000);

  const formattedSunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedSunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div>

      <div className='
        flex
        flex-col
        items-center
        gap-1
      '>

        <Image 
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt={weather[0].main}
          width={170}
          height={170}
        />

        <div className='text-4xl font-bold'>
          {temperatureCelsius.toFixed(0)} <sup>°C</sup>
        </div>
        <div className='capitalize text-xl'>
          {weather[0].description}
        </div>
      </div>

      <div className='flex flex-row gap-4 justify-between mt-6'>

        <div className='flex flex-col items-center justify-center gap-5'>
          <InfoBox label='Feels Like' image='temperature' symbol='°C' data={feelsLikeInCelsius.toFixed(0)} />
          <InfoBox label='Humidity' image='humidity' symbol='%' data={main.humidity} />
          <InfoBox label='Wind' image='wind' symbol='Km/h' data={wind.speed} />
        </div>

        <div className='flex flex-col gap-5 items-center justify-center'>
          <InfoBox label='Sunrise' image='sunrise' data={formattedSunriseTime} />
          <InfoBox label='Sunset' image='sunset' data={formattedSunsetTime} />         
        </div>

      </div>

    </div>
  )
}

export default WeatherDetails