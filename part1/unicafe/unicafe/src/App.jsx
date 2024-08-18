import { useState } from 'react'
import Button from './button.jsx'

function App() {
  const [good, setGood] = useState(() => {
    const goodCount = localStorage.getItem('good'); 
    if (goodCount === undefined) {
      localStorage.setItem('good', 0);
    } else {
      return goodCount;
    }
    return 0;
  });
  const [neutral, setNeutral] = useState(() => {
    const neutralCount = localStorage.getItem('neutral'); 
    if (neutralCount === undefined) {
      localStorage.setItem('neutral', 0);
    } else {
      return neutralCount;
    }
    return 0;
  });
  const [bad, setBad] = useState(() => {
    const badCount = localStorage.getItem('bad'); 
    if (badCount === undefined) {
      localStorage.setItem('bad', 0);
    } else {
      return badCount;
    }
    return 0;
  });
  
  const handleGood = () => {
    setGood((goodCount) => {
      ++goodCount;
      localStorage.setItem("good", goodCount);
      return goodCount;
    });
  }
  const handleNeutral = () => {
    setNeutral((neutralCount) => {
      ++neutralCount;
      localStorage.setItem("neutral", neutralCount);
      return neutralCount;
    });
  }
  const handleBad = () => {
    setBad((badCount) => {
      ++badCount;
      localStorage.setItem("bad", badCount);
      return badCount;
    });
  }

  return (
    <>
      <h1>give feedback</h1>
      <br/>
      <Button buttonText={'good'} handleButton={handleGood}/>
      <Button buttonText={'neutral'} handleButton={handleNeutral}/>
      <Button buttonText={'bad'} handleButton={handleBad}/>
      <br/>
      <h1>statistics</h1>
      <br/>
      <p>good {good || 0}</p>
      <p>neutral {neutral || 0}</p>
      <p>bad {bad || 0}</p>
      <p>all {Number(good) + Number(neutral) + Number(bad) || 0}</p>
      <p>average {(Number(good) * 1 + Number(neutral) * 0 + Number(bad) * -1) / (Number(good) + Number(bad) + Number(neutral)) || 0}</p>
      <p>positive {(Number(good) / (Number(good) + Number(bad) + Number(neutral)) * 100) || 0} %</p>
    </>
  )
}

export default App;
