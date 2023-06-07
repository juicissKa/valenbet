import React from 'react'
import { useState } from 'react'

const BetButton = ({coef, matchInfo, team, handleAddCoupon, resultId, isActive}) => {
  return (
    <div className='BetButton centered'>
        <button className='circled' style={{backgroundColor: isActive ? 'black' : 'white', color: isActive ? 'white' : 'black'}} onClick={() => {
          handleAddCoupon(matchInfo, coef, team, resultId);
          }}>{coef}</button>
    </div>
  )
}

export default BetButton