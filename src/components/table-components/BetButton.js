import React from 'react'
import { useState } from 'react'

const BetButton = ({coef, matchInfo, team, handleAddCoupon}) => {
  return (
    <div className='BetButton centered'>
        <button className='circled' onClick={() => handleAddCoupon(matchInfo, coef, team)}>{coef}</button>
    </div>
  )
}

export default BetButton