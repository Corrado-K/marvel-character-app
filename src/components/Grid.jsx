import React from 'react'

export default function Grid({children}) {
  return (
    <div className='grid grid-cols-2 w-fit md:flex md:flex-wrap'>{children}</div>
  )
}
