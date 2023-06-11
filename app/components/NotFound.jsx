"use client"

import Image from 'next/image'

const NotFound = () => {
  return (
    <div className='
      flex
      flex-col
      items-center
      justify-center
      py-10
      gap-4
    '>
      <Image 
        width={150}
        height={150}
        src='/images/not-found.png'
      />

      <h4 className='text-xl text-center'><span className='text-2xl block'>Oops!</span> No results found for your search.</h4>

    </div>
  )
}

export default NotFound