import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'
import { ReactElement, useState, createElement } from 'react'

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

const CardFace = ({card}) => {
  if (card.shape == null) {
    return (<p>shape is empty</p>)
  } else if (card.color == null) {
    return (<p>color is empty</p>)
  } else if (card.fill == null) {
    return (<p>fill is empty</p>)
  } else if (card.count == null) {
    return (<p>count is empty</p>)
  } else {
    if (card.fill === 'solid') {
      return (
        Array(card.count).fill(0).map(() => createElement(card.shape, { color: card.color, fill: card.color }))
      )
    } else if (card.fill === 'stripe') {
      return (
        Array(card.count).fill(0).map(() => createElement(card.shape, { color: card.color, fill: 'url(#diagonalHatch)' }))
      )
    } else {
      return (
        Array(card.count).fill(0).map(() => createElement(card.shape, { color: card.color, fill: '#ffffff' }))
      )
    }
  }
}

const Card = (props) => {
  const top = props.position.top
  const left = props.position.left
  const [cardState, setCardState] = useState(new CardState(Oval, 'red', 'stripe', 2))

  return (
    <div className='card' style={{ top, left }}>
      <div className='card-face'>
        <CardFace card={cardState} />
      </div>
    </div>
  )
}

export default Card
