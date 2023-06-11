"use client"

import { SlLocationPin } from 'react-icons/sl'
import { BsSend } from 'react-icons/bs'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const Search = ({ handleInputText }) => {

  const [searchText, setSearchText] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleOnSubmit = (e) => {

    e.preventDefault()

    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
    }, 300)

    if (!searchText.trim()) {
      toast.error('Please Enter a Location...')
      return
    }

    handleInputText(searchText)
    // setSearchText('')

  }

  return (
    <div className="flex flex-row items-center gap-4">
      <div>
        <SlLocationPin size={25} />
      </div>
      <div className='flex-grow py-4 px-3 rounded-sm'>
        <form
          className='flex flex-row items-center gap-2'
          onSubmit={handleOnSubmit}
        >
          <input 
            onChange={(e) => setSearchText(e.target.value)}
            className='flex-grow bg-transparent focus:outline-none' 
            type="text"
            placeholder="Enter Location..."
            value={searchText}
          />
          <button
            className={`
              cursor-pointer
              transition
              duration-300
              transform
              ${isSubmitted ? 'scale-75' : 'scale-100'}
              active:scale-75
            `}
            type='submit'
          >
            <BsSend size={25} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search