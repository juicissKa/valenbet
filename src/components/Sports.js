import '../style.scss';
import { useState, useEffect } from 'react';
import Match from './table-components/Match';

function Sports({handleAddCoupon, coupon}) {
    // переменная, хранящая данные о матчах
    const [matches, setMatches] = useState([]);

    // подгрузка матчей при загрузке страницы
    useEffect(() => {
        getMatches();
      }, []);
     
    // функция, получающая доступные матчи
    function getMatches() {
        fetch('http://localhost:3001')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setMatches(data);
        })
    } 

    return (
        <div className="Sports">
            <h1>Главные события</h1>
            <div className='MatchesList'>{matches.map((match, index) => <Match key={index} matchInfo={match} handleAddCoupon={handleAddCoupon} chosenResult={
                coupon.find(currentMatch => match.event_id === currentMatch.matchInfo.event_id) ? coupon[coupon.findIndex(currentMatch => match.event_id === currentMatch.matchInfo.event_id)].resultId : -1} />)}</div>
        </div>
    );
}

export default Sports;
