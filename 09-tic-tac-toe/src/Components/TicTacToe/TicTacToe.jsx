import React from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

const TicTacToe = () => {
  return (
    <div className='container'>
        <h1 className="title">Tic Tc Toe Game In <span>React</span></h1>
        <div className="board">

        </div>    
        <button className='reset'>
            Reset
        </button>
    </div>
  )
}

export default TicTacToe