"use client"

import Image from 'next/image'

const InfoBox = ({ label, image, symbol, data }) => {
  return (
    <div className='flex flex-row items-center justify-center gap-3'>
      <Image src={`/images/${image}.png`} alt={label} width={50} height={50} />
      <div>
        <span className='font-bold'>{data}{symbol && symbol}</span>
        <h4>{label}</h4>
      </div>
    </div>
  )
}

export default InfoBox