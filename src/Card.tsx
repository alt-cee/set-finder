import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'
import { ReactElement, useState, createElement } from 'react'

const Card = ({ card, onInputClick }) => {
  const onInputClickId = (type, value) => onInputClick(card.position, type, value)
  if (card.shape == null) {
    return (
      <div>
        <h2>Shape?</h2>
        <div><button onClick={() => onInputClickId('shape', Oval)}>Oval</button></div>
        <div><button onClick={() => onInputClickId('shape', Diamond)}>Diamond</button></div>
        <div><button onClick={() => onInputClickId('shape', Tilde)}>Tilde</button></div>
      </div>
    )
  } else if (card.color == null) {
    return (
      <div>
        <h2>Color?</h2>
        <div><button onClick={() => onInputClickId('color', 'red')}>Red</button></div>
        <div><button onClick={() => onInputClickId('color', 'purple')}>Purple</button></div>
        <div><button onClick={() => onInputClickId('color', 'green')}>Green</button></div>
      </div>
    )
  } else if (card.fill == null) {
    return (
      <div>
        <h2>Fill?</h2>
        <div><button onClick={() => onInputClickId('fill', 'blank')}>Blank</button></div>
        <div><button onClick={() => onInputClickId('fill', 'stripe')}>Stripe</button></div>
        <div><button onClick={() => onInputClickId('fill', 'solid')}>Solid</button></div>
      </div>
        )
  } else if (card.count == null) {
    return (
      <div>
        <h2>Count?</h2>
        <div><button onClick={() => onInputClickId('count', 1)}>1</button></div>
        <div><button onClick={() => onInputClickId('count', 2)}>2</button></div>
        <div><button onClick={() => onInputClickId('count', 3)}>3</button></div>
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
