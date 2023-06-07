import '../style.scss';
import { useState } from 'react';
import Event from './coupon-components/Event'

function Coupon({coupon, handleDelete}) {
  // Переменная, хранящая сумму ставки
  const [betValue, setBetValue] = useState(0);

  // Переменная, хранящая список исходов в виде компонентов
  const couponList = coupon.map((match, index) => <Event key={index} matchInfo={match.matchInfo} coef={match.coef} team={match.team} resultId={match.resultId} handleDelete={handleDelete} eventIndex={index} />);

  // Коэффициент
  const overall_coef = coupon.reduce((accumulator, match) => accumulator * match.coef, 1);
  // Выплата
  const overall_payout = overall_coef * betValue;
  // Тип пари
  const pari_type = coupon.length > 1 ? "Экспресс" : "Ординар";

  // Хэндлер изменения суммы ставки
  function handleChange(event) {
    setBetValue(event.target.value);
  }

  // Хэндлер ставки
  function handleBet() {
    
    // Дата и время
    let currentDate = new Date();
    let date = currentDate.getFullYear().toString() + '-' + currentDate.getMonth().toString() + '-' + currentDate.getDate().toString();
    let time = currentDate.getHours().toString() + ':' + (currentDate.getMinutes() + 1).toString() + ':' + currentDate.getSeconds().toString();

    // Информация об проставленных исходах
    let resultsInfo = coupon.map(match => [match.matchInfo.event_id, match.resultId]);

    // Проверки
    if (betValue < 10) {
      alert("Ставка должна быть не меньше 10 рублей!")
      return;
    }

    if (resultsInfo.length < 1) {
      alert("Добавьте хотя бы одно пари!")
      return;
    }

    // Запрос на сервер
    fetch('http://localhost:3001/bets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({betInfo: {type: pari_type, total_coef: overall_coef, sum: betValue, status: "Не рассчитано", date: date, time: time}, resultsInfo: resultsInfo}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });
  }

  return (
    <div className="Coupon">
      <div className='coupon-window circled'>
        <div className='title-wrapper'>
          <h1>Ставка</h1>
        </div>
        <div className='row-wrapper centered'>
          <hr />
        </div>

        <div className='events-container'>
          {couponList}
        </div>

        <div className='place-bet-container'>
          <div className='bet-wrapper'>
            <input type="number" min="10" max="99999" value={betValue} onChange={handleChange} />
            <button className='circled' onClick={handleBet}>Сделать ставку</button>
          </div>
          <div className='bet-info-wrapper'>
            <div className='coef'><span>Общий коэффицент:</span><span>{overall_coef.toFixed(2)}</span></div>
            <div className='payout'><span>Общая выплата:</span><span>{overall_payout.toFixed(2)}</span></div>
            <div className='pari_type'><span>Тип пари:</span><span>{pari_type}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
