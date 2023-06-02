import React from 'react'

const BetButton = ({coef}) => {
  return (
    <div className='BetButton centered'>
        <button className='circled'>{coef}</button>
    </div>
  )
}

export default BetButton