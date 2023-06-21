import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'
import { ReactElement, useState, createElement } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import Board from './Board'
import Card from './Card'

class CardState {
  _shape: ReactElement | null
  _color: string | null
  _fill: string | null
  _count: number | null

  constructor (
    shape: ReactElement | null,
    color: string | null,
    fill: string | null,
    count: number | null) {
    this._shape = shape // {oval, diamond, tilde}
    this._color = color // {red, purple, green}
    this._fill = fill // {blank, stripe, solid}
    this._count = count // {1, 2, 3}
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
  // currentCards: array of cardStates
  const [currentCards, setCurrentCards] = useState([new CardState(null, null, null, null)])
  // handleInput: update currentCards with new cardState
  // onAddCard
  function handleAddCard() {
    const nextCards = [...currentCards.slice(), new CardState(null, null, null, null)]
    setCurrentCards(nextCards)
  }
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Board cards={currentCards} onAddCard={handleAddCard}/>
    </div>
  )
}

export default App
