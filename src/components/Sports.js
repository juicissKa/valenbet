import '../style.scss';
import { useState } from 'react';
import Match from './table-components/Match';

function Sports({handleAddCoupon}) {
    const matches = [{
        matchId: 1,
        home: "Barcelona",
        guest: "Real Madrid",
        league: "La Liga",
        time: "12:00",
        home_coef: 1.9,
        guest_coef: 1.9,
        draw_coef: 2.8,
        home_pic: "images/barcelona.png",
        guest_pic: "images/real_madrid.png"
    },
    {
        matchId: 2,
        home: "Bayern Munich",
        guest: "Borussia Dortmund",
        league: "Bundesliga",
        time: "14:00",
        home_coef: 1.7,
        guest_coef: 2.2,
        draw_coef: 2.8,
        home_pic: "images/bayern.png",
        guest_pic: "images/borussia.png"
    },
    {
        matchId: 3,
        home: "Zenit",
        guest: "Spartak",
        league: "RPL",
        time: "17:00",
        home_coef: 1.5,
        guest_coef: 2.5,
        draw_coef: 2.8,
        home_pic: "images/zenit.png",
        guest_pic: "images/spartak.png"
    }
    ];

    const matchesList = matches.map((match, index) => <Match key={index} matchInfo={match} handleAddCoupon={handleAddCoupon} />);  

    return (
        <div className="Sports">
            <h1>Главные события</h1>
            <div className='MatchesList'>{matchesList}</div>
        </div>
    );
}

export default Sports;
