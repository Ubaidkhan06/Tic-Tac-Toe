import './App.css';
import { useState } from 'react'


function App() {

  const [state, setState] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)

  const checkWinner = () => {

    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let winArr of winner) {
      const [a, b, c] = winArr
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a]
      }
    }

    return false

  }


  const isWinner = checkWinner()

  const handleClick = (index) => {
    if (state[index] !== null) {
      return
    }
    const tempState = [...state]
    tempState[index] = isXTurn ? 'X' : '0'
    setState(tempState)
    setIsXTurn(!isXTurn)
    console.log('Clicked on index', index)
  }

  const handleBtnClick = () => {
    setState(Array(9).fill(null))
    setIsXTurn(true)
  }

  return (
    <>
      <header className='header'>Tic Tac Toe</header>

      {
        !isWinner ? isXTurn ? (<div className='header'>X Turn</div>)
          : (<div className='header' >0 Turn</div>) : ''
      }
      <div className='header'>
        <button className='button' onClick={handleBtnClick} >Reset</button>

      </div>
      {
        isWinner ? (
          <>
            <div className='header'>{isWinner} won the game</div>
          </>
        ) : (
          <div class="game-board">
            {
              state.map((ele, index) => (
                <div class="box" onClick={(e) => handleClick(index)}>{ele}</div>
              ))
            }
          </div>
        )
      }

    </>
  );
}

export default App;
