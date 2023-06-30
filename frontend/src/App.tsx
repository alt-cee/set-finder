import { useState, useEffect } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import Board from './Board'

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
type MapishCardState = {
  [Property in keyof CardState]: string | number | null
}

type InputValue = string | number | null

class CardState {
  public id: number
  public shape: string | null
  public color: string | null
  public fill: string | null
  public count: number | null

  constructor (
    id: number,
    shape: string | null,
    color: string | null,
    fill: string | null,
    count: number | null) {
    this.id = id
    this.shape = shape // {oval, diamond, tilde}
    this.color = color // {red, purple, green}
    this.fill = fill // {blank, stripe, solid}
    this.count = count // {1, 2, 3}
  }
}

function App() {
  const [currentCards, setCurrentCards] = useState([new CardState(0, null, null, null, null)])
  const [nSets, setNSets] = useState(null)

  function handleAddCard() {
    const nextCardIndex = currentCards.length
    if (nextCardIndex < 12) {
      const nextCards = [...currentCards.slice(), new CardState(nextCardIndex, null, null, null, null)]
      console.log(currentCards, nextCardIndex)
      setCurrentCards(nextCards)}
  }

  function handleInputClick (id: CardState['id'], type: keyof CardState, value: InputValue) {
    const currentCardState = currentCards.find(card => card.id === id)

    if (currentCardState === undefined) {
      throw new Error('Unable to find card state')
    }

    const newCardState = new CardState(currentCardState?.id, currentCardState?.shape, currentCardState?.color, currentCardState?.fill, currentCardState?.count);
    (newCardState as MapishCardState)[type] = value
    const newCards = currentCards.map((card) => card.id === id ?
    newCardState : card )
    console.log(JSON.stringify(newCardState))
    setCurrentCards(newCards)
  }

  useEffect(() => {
    if (currentCards.length > 3) {
      fetch('http://localhost:8000/checkSets')
        .then(response => {
          return response.json()
        })
        .then(data => setNSets(data.length))
    }
  }, [currentCards])

  return (
    <div className="App">
        <Header />
        <Sidebar nSets={nSets}/>
        <Board cards={currentCards} onAddCard={handleAddCard} onInputClick={handleInputClick}/>
    </div>
  )
}

export default App
