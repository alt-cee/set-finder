import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'
import { ReactElement, useState, createElement, useEffect } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import Board from './Board'
import Card from './Card'

class CardState {
  _position: number  
  _shape: ReactElement | null
  _color: string | null
  _fill: string | null
  _count: number | null

  constructor (
    position: number,
    shape: ReactElement | null,
    color: string | null,
    fill: string | null,
    count: number | null) {
    this._position = position
    this._shape = shape // {oval, diamond, tilde}
    this._color = color // {red, purple, green}
    this._fill = fill // {blank, stripe, solid}
    this._count = count // {1, 2, 3}
  }

  get position (): number {
    return this._position
  }

  get shape (): ReactElement | null {
    return this._shape
  }

  set shape (shape: ReactElement) {
    this._shape = shape
  }

  get color (): string | null {
    return this._color
  }

  set color (color: string) {
    this._color = color
  }

  get fill (): string | null {
    return this._fill
  }

  set fill (fill: string) {
    this._fill = fill
  }

  get count (): number | null {
    return this._count
  }

  set count (count: number) {
    this._count = count
  }
}

function App() {
  const [currentCards, setCurrentCards] = useState([new CardState(0, null, null, null, null)])

  function handleAddCard() {
    const nextCardIndex = currentCards.length
    if (nextCardIndex < 12) {
      const nextCards = [...currentCards.slice(), new CardState(nextCardIndex, null, null, null, null)]
      console.log(currentCards, nextCardIndex)
      setCurrentCards(nextCards)}
  }

  function handleInputClick (position, type, value) {
    const currentCardState = currentCards.find(card => card.position === position)
    const newCardState = new CardState(currentCardState.position, currentCardState.shape, currentCardState.color, currentCardState.fill, currentCardState.count)
    newCardState[type] = value
    const newCards = currentCards.map((card) => card.position === position ? 
    newCardState : card ) 
    setCurrentCards(newCards)
  }


  
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Board cards={currentCards} onAddCard={handleAddCard} onInputClick={handleInputClick}/>
    </div>
  )
}

export default App
