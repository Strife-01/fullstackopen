import { useState, useRef } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
   
  const [selected, setSelected] = useState(() => 0);
  const [vote, setVote] = useState(() => new Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(() => null);
  /*
  const [votesObj, setVotesObj] = useState(() => {
    return {...new Array(anecdotes.length).fill(0)};
  });
  */

  const handleSelected = () => {
    return setSelected(() => Math.floor(Math.random() * anecdotes.length));
  }

  const handleVote = () => {
    return setVote((arr) => {
      const copy = [...arr];
      copy[selected]++;
      
      let mostVotedLocal = selected;
      for (let i = 0; i < copy.length; i++) {
        if (copy[i] > copy[mostVotedLocal]) {
          mostVotedLocal = i;
        }
      }

      setMostVoted(() => mostVotedLocal);
      console.log(mostVotedLocal);

      return copy;
    });
  }
  
  /*
  const handleVoteObj = () => {
    return setVotesObj((obj) => {
      const copy = {...obj};
      copy[selected]++;
      return copy;
    })
  }
  */

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <div> 
          {anecdotes[selected]}
        </div>
        <div>
          {`has ${vote[selected]} votes.`}
        </div>
        {/* <div> {`has ${votesObj[selected]} votes.`} </div> */}

      </div>
      <Button text={'vote array'} handleClick={handleVote}/>
      {/* <Button text={'vote object'} handleClick={handleVoteObj}/> */}
      <Button text={'next anecdote'} handleClick={handleSelected}/>
      <h1>Anecdote with the most votes</h1>
      {mostVoted != null ? (
        anecdotes[mostVoted]
      ):(
      <p>There is no voted anecdote.</p>
      )}
    </>
  )
}

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>;


export default App;
