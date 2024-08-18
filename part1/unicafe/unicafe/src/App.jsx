import { useState } from 'react'
import Button from './button.jsx'

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good + bad * -1) / all;
  const positive = good / all * 100;

  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad || 0}</p>
      <p>all {all}</p>
      <p>average {average || 0}</p>
      <p>positive {positive || 0} %</p>
    </>
  );
}

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
      <Button buttonText={'good'} handleButton={handleGood}/>
      <Button buttonText={'neutral'} handleButton={handleNeutral}/>
      <Button buttonText={'bad'} handleButton={handleBad}/>
      <Statistics good={Number(good) || 0} neutral={Number(neutral) || 0} bad={Number(bad) || 0}/>
    </>
  )
}

export default App;
