import '../style.scss';
import Sports from './Sports'
import Coupon from './Coupon'

import { useState } from 'react';

function App() {


  // Переменная, хранящая текущие исходы в купоне
  const [coupon, setCoupon] = useState([]);


  // хэндлер удаления события из купона
  function handleDelete(eventIndex) {

    // удаление из купона
    setCoupon(oldCoupon => {
      let cloneArray = [...oldCoupon];
      cloneArray.splice(eventIndex, 1)

      return [...cloneArray];
    });
  }


  // хэндлер добавления ставки в купон
  function handleAddCoupon(matchInfo, coef, team, resultId) {
    let index = coupon.findIndex(match => match.matchInfo.event_id === matchInfo.event_id);
    if (index != -1) {
      setCoupon(oldCoupon => {
        let cloneArray = [...oldCoupon];
        cloneArray[index] = {matchInfo: matchInfo, coef: coef, team: team, resultId: resultId};

        return [...cloneArray];
      });
    } else {
      setCoupon(oldCoupon => [...oldCoupon, {matchInfo: matchInfo, coef: coef, team: team, resultId: resultId}]);
    }
  }

  return (
    <div className="App">
      <Sports handleAddCoupon={handleAddCoupon} coupon={coupon} />
      <Coupon handleDelete={handleDelete} coupon={coupon}/>
    </div>
  );
}

export default App;
