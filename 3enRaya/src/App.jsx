import { useState, useEffect } from 'react'

import './App.css'
import confetti from "canvas-confetti"
import { Turns } from './Constantes'
import { Square } from './componentes/Square'
import { WinnerModal } from './componentes/WinnerModal'
import { checkWinner, checkEndGame } from './logica/CheckWinner'
import { resetStorage, saveGame } from './storage'
function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    // si tengo elementos en el storage lo retorno
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  })
  console.log(board)

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');

    return turnFromStorage ?? Turns.X;
  });

  const [winner, setWinner] = useState(null);
  useEffect(() => {
    console.log("Uso");
  }, [])
  const updateBoard = (index) => {
    // si la posicion esta marcada no actualizamos
    if (board[index] || winner) return;


    const newBoard = [...board];

    newBoard[index] = turn;

    setBoard(newBoard);

    const newTurn = turn === Turns.X ? Turns.O : Turns.X;

    setTurn(newTurn);

    //guardar partida
    saveGame({
      board: newBoard,
      turn: newTurn
    });
    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner)

    } else if (checkEndGame(newBoard)) {
      setWinner(false); // hubo empate
    }
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null));

    setTurn(Turns.X);

    setWinner(null);
    resetStorage();

  }

  return (
    <main className='board'>
      <h1>3 en raya</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='game'>
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>{board[index]}</Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === Turns.X}>
          {Turns.X}
        </Square>
        <Square isSelected={turn === Turns.O}>
          {Turns.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>

  )
}

export default App
