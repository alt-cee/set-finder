import { CardState } from './App'
import { InputClickFunction } from './Board'
// I belive this could be fixed with a .d.ts file
import { ReactComponent as Diamond} from './assets/diamond.svg'
import { ReactComponent as Oval} from './assets/oval.svg'
import { ReactComponent as Tilde} from './assets/tilde.svg'
import { FunctionComponent, createElement } from 'react'

type CardImage = FunctionComponent<{ color: any; fill: any; }>

const shapeLookup = new Map<string, CardImage>()
  .set('oval', Oval)
  .set('diamond', Diamond)
  .set('tilde', Tilde)

const Card = ({ card, onInputClick }: { card: any, onInputClick: InputClickFunction}) => {
  const onInputClickId = (type: keyof CardState, value: string | number ) => onInputClick(card.id, type, value)
  if (card.shape == null) {
    return (
      <div>
        <h2>Shape?</h2>
        <div><button onClick={() => onInputClickId('shape', 'oval')}>Oval</button></div>
        <div><button onClick={() => onInputClickId('shape', 'diamond')}>Diamond</button></div>
        <div><button onClick={() => onInputClickId('shape', 'tilde')}>Tilde</button></div>
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
    const shape = shapeLookup.get(card.shape)

    if (shape === undefined) {
      throw new Error('Card shape is undefined.')
    }

    if (card.fill === 'solid') {
      return (
        Array(card.count).fill(0).map(() => createElement(shape, { color: card.color, fill: card.color }))
      )
    } else if (card.fill === 'stripe') {
      return (
        Array(card.count).fill(0).map(() => createElement(shape, { color: card.color, fill: 'url(#diagonalHatch)' })))
    } else {
      return (
        Array(card.count).fill(0).map(() => createElement(shape, { color: card.color, fill: '#ffffff' }))
      )
    }
  }
}

export default Card
