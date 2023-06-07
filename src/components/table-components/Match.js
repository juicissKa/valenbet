import { useState } from 'react';
import TeamPic from './TeamPic';
import Draw from './Draw';
import BetButton from './BetButton';
import TeamName from './TeamName';

function Match({matchInfo, handleAddCoupon, chosenResult}) {


    return (
        <div className="Match circled">
            <div className='bets-wrapper'>
                <div></div>
                <div className='match-league centered'>{matchInfo.league}</div>
                <div className='match-time'>{matchInfo.time}</div>

                <TeamPic pic={matchInfo.home_pic} />
                <Draw />
                <TeamPic pic={matchInfo.guest_pic} />

                <TeamName name={matchInfo.home}/>
                <TeamName name={matchInfo.guest}/>
                
                <BetButton coef={matchInfo.home_coef} resultId={0} matchInfo = {matchInfo} team={matchInfo.home} handleAddCoupon={handleAddCoupon} isActive={chosenResult === 0 ? true : false} />
                <BetButton coef={matchInfo.draw_coef} resultId={1} matchInfo = {matchInfo} team={"Ничья"} handleAddCoupon={handleAddCoupon} isActive={chosenResult === 1 ? true : false} />
                <BetButton coef={matchInfo.guest_coef} resultId={2} matchInfo = {matchInfo} team={matchInfo.guest} handleAddCoupon={handleAddCoupon} isActive={chosenResult === 2 ? true : false} />
            </div>
        </div>
    );
}

export default Match;
