import { useState } from 'react';
import TeamPic from './TeamPic';
import Draw from './Draw';
import BetButton from './BetButton';
import TeamName from './TeamName';

function Match({matchInfo, handleAddCoupon}) {


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
                
                <BetButton coef={matchInfo.home_coef} matchInfo = {matchInfo} team={matchInfo.home} handleAddCoupon={handleAddCoupon} />
                <BetButton coef={matchInfo.draw_coef} matchInfo = {matchInfo} team={"Ничья"} handleAddCoupon={handleAddCoupon} />
                <BetButton coef={matchInfo.guest_coef} matchInfo = {matchInfo} team={matchInfo.guest} handleAddCoupon={handleAddCoupon} />
            </div>
        </div>
    );
}

export default Match;
