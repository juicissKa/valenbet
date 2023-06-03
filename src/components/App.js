import '../style.scss';
import Sports from './Sports'
import Coupon from './Coupon'

import { useState } from 'react';

function App() {

  const [coupon, setCoupon] = useState([]);

  function handleDelete(eventIndex) {
    setCoupon(oldCoupon => {
      let cloneArray = [...oldCoupon];
      cloneArray.splice(eventIndex, 1)

      return [...cloneArray];
    });
  }

  function handleAddCoupon(matchInfo, coef, team) {
    let index = coupon.findIndex(match => match.matchInfo.matchId === matchInfo.matchId);
    if (index != -1) {
      setCoupon(oldCoupon => {
        let cloneArray = [...oldCoupon];
        cloneArray[index] = {matchInfo: matchInfo, coef: coef, team: team};

        return [...cloneArray];
      })
    } else {
      setCoupon(oldCoupon => [...oldCoupon, {matchInfo: matchInfo, coef: coef, team: team}]);
    }
  }

  return (
    <div className="App">
      <Sports handleAddCoupon={handleAddCoupon} />
      <Coupon handleDelete={handleDelete} coupon={coupon}/>
    </div>
  );
}

export default App;
