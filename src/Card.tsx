import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'
import { ReactElement, useState, createElement } from 'react'

// class CardState {
//   _shape: ReactElement | null
//   _color: string | null
//   _fill: string | null
//   _count: number | null

//   constructor (
//     shape: ReactElement | null,
//     color: string | null,
//     fill: string | null,
//     count: number | null) {
//     this._shape = shape // {oval, diamond, tilde}
//     this._color = color // {red, purple, green}
//     this._fill = fill // {blank, stripe, solid}
//     this._count = count // {1, 2, 3}
//   }

//   get shape (): ReactElement | null {
//     return this._shape
//   }

//   set shape (shape: ReactElement) {
//     this._shape = shape
//   }

//   get color (): string | null {
//     return this._color
//   }

//   set color (color: string) {
//     this._color = color
//   }

//   get fill (): string | null {
//     return this._fill
//   }

//   set fill (fill: string) {
//     this._fill = fill
//   }

//   get count (): number | null {
//     return this._count
//   }

//   set count (count: number) {
//     this._count = count
//   }
// }

// const CardFace = ({ card, handleCountClick, handleFillClick, handleColorClick, handleShapeClick}) => {
//   if (card.shape == null) {
//     return (
//       <div>
//         <h2>Shape?</h2>
//         <div><button onClick={() => handleShapeClick(Oval)}>Oval</button></div>
//         <div><button onClick={() => handleShapeClick(Diamond)}>Diamond</button></div>
//         <div><button onClick={() => handleShapeClick(Tilde)}>Tilde</button></div>
//       </div>
//     )
//   } else if (card.color == null) {
//     return (
//       <div>
//         <h2>Color?</h2>
//         <div><button onClick={() => handleColorClick('red')}>Red</button></div>
//         <div><button onClick={() => handleColorClick('purple')}>Purple</button></div>
//         <div><button onClick={() => handleColorClick('green')}>Green</button></div>
//       </div>
//     )
//   } else if (card.fill == null) {
//     return (
//       <div>
//         <h2>Fill?</h2>
//         <div><button onClick={() => handleFillClick('blank')}>Blank</button></div>
//         <div><button onClick={() => handleFillClick('stripe')}>Stripe</button></div>
//         <div><button onClick={() => handleFillClick('solid')}>Solid</button></div>
//       </div>
//         )
//   } else if (card.count == null) {
//     return (
//       <div>
//         <h2>Count?</h2>
//         <div><button onClick={() => handleCountClick(1)}>1</button></div>
//         <div><button onClick={() => handleCountClick(2)}>2</button></div>
//         <div><button onClick={() => handleCountClick(3)}>3</button></div>
//       </div>
//     )
//   } else {
//     if (card.fill === 'solid') {
//       return (
//         Array(card.count).fill(0).map(() => createElement(card.shape, { color: card.color, fill: card.color }))
//       )
//     } else if (card.fill === 'stripe') {
//       return (
//         Array(card.count).fill(0).map(() => createElement(card.shape, { color: card.color, fill: 'url(#diagonalHatch)' })))
//     } else {
//       return (
//         Array(card.count).fill(0).map(() => createElement(card.shape, { color: card.color, fill: '#ffffff' }))
//       )
//     }
//   }
// }

// const Card = (props) => {
//   // renders a single card
//   const top = props.position.top
//   const left = props.position.left
//   const [cardState, setCardState] = useState(new CardState(null, null, null, null))

//   const handleCountClick = (value) => {
//     const nextCardState = new CardState(cardState.shape, cardState.color, cardState.fill, cardState.count)
//     nextCardState.count = value
//     setCardState(nextCardState)
//   }

//   const handleFillClick = (value) => {
//     const nextCardState = new CardState(cardState.shape, cardState.color, cardState.fill, cardState.count)
//     nextCardState.fill = value
//     setCardState(nextCardState)
//   }

//   const handleColorClick = (value) => {
//     const nextCardState = new CardState(cardState.shape, cardState.color, cardState.fill, cardState.count)
//     nextCardState.color = value
//     setCardState(nextCardState)
//   }

//   const handleShapeClick = (value) => {
//     const nextCardState = new CardState(cardState.shape, cardState.color, cardState.fill, cardState.count)
//     nextCardState.shape = value
//     setCardState(nextCardState)
//   }

//   return (
//     <div className='card' style={{ top, left }}>
//       <div className='card-face'>
//         <CardFace card={cardState} handleCountClick={handleCountClick} handleFillClick={handleFillClick} handleColorClick={handleColorClick} handleShapeClick={handleShapeClick} />
//       </div>
//     </div>
//   )
// }

const Card = ({ card }) => {
  if (card.shape == null) {
    return (
      <div>
        <h2>Shape?</h2>
        <div><button onClick={() => handleShapeClick(Oval)}>Oval</button></div>
        <div><button onClick={() => handleShapeClick(Diamond)}>Diamond</button></div>
        <div><button onClick={() => handleShapeClick(Tilde)}>Tilde</button></div>
      </div>
    )
  } else if (card.color == null) {
    return (
      <div>
        <h2>Color?</h2>
        <div><button onClick={() => handleColorClick('red')}>Red</button></div>
        <div><button onClick={() => handleColorClick('purple')}>Purple</button></div>
        <div><button onClick={() => handleColorClick('green')}>Green</button></div>
      </div>
    )
  } else if (card.fill == null) {
    return (
      <div>
        <h2>Fill?</h2>
        <div><button onClick={() => handleFillClick('blank')}>Blank</button></div>
        <div><button onClick={() => handleFillClick('stripe')}>Stripe</button></div>
        <div><button onClick={() => handleFillClick('solid')}>Solid</button></div>
      </div>
        )
  } else if (card.count == null) {
    return (
      <div>
        <h2>Count?</h2>
        <div><button onClick={() => handleCountClick(1)}>1</button></div>
        <div><button onClick={() => handleCountClick(2)}>2</button></div>
        <div><button onClick={() => handleCountClick(3)}>3</button></div>
      </div>
    )
  } else {
    if (card.fill === 'solid') {
      return (
        Array(card.count).fill(0).map(() => createElement(card.shape, { color: card.color, fill: card.color }))
      )
    } else if (card.fill === 'stripe') {
      return (
        Array(card.count).fill(0).map(() => createElement(card.shape, { color: card.color, fill: 'url(#diagonalHatch)' })))
    } else {
      return (
        Array(card.count).fill(0).map(() => createElement(card.shape, { color: card.color, fill: '#ffffff' }))
      )
    }
  }
}
 
export default Card
