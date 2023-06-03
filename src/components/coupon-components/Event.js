import React from 'react'

const Event = ({matchInfo, coef, team, handleDelete, eventIndex}) => {

    return (
        <div className='Event'>
            <div className='clear-match'><span onClick={() => handleDelete(eventIndex)}>X</span></div>
            <div className='event-info'>
                <div className='match-info'>
                    <span className='home'>{matchInfo.home} </span>
                    –
                    <span className='guest'> {matchInfo.guest}</span>
                </div>
                <div className='result'>Исход: {team}</div>
                <div className='coef'>Коэффицент: {coef}</div>
            </div>
        </div>
    )
}

export default Event