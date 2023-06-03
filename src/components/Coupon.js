import '../style.scss';
import { useState } from 'react';
import Event from './coupon-components/Event'

function Coupon({coupon, handleDelete}) {
  const [betValue, setBetValue] = useState(0);

  const couponList = coupon.map((match, index) => <Event key={index} matchInfo={match.matchInfo} coef={match.coef} team={match.team} handleDelete={handleDelete} eventIndex={index} />);

  const overall_coef = coupon.reduce((accumulator, match) => accumulator * match.coef, 1);
  const overall_payout = overall_coef * betValue;

  function handleChange(event) {
    setBetValue(event.target.value);
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
            <button className='circled'>Сделать ставку</button>
          </div>
          <div className='bet-info-wrapper'>
            <div className='coef'><span>Общий коэффицент:</span><span>{overall_coef.toFixed(3)}</span></div>
            <div className='payout'><span>Общая выплата:</span><span>{overall_payout.toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
