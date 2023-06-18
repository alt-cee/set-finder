import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'
import { ReactElement, useState } from 'react';

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

// function Shape({card}) {
//     if (card.color == null || card.fill == null || card.shape == null || card.count == null) {
//         return (
//         <div>Color? 
//             <button onClick={function setColorRed(card) {card.color = "red"; setCard()}}>Red</button>
//             <button>Green</button>
//             <button>Purple</button>
//         </div>)
//     }
//     const CardShape=card.shape; 
//     return <CardShape color={card.color} fill={card.fill} />
// }


const CardFace = ({card}) => {
    if (card === 'blank') {
        return (<p>Card is blank</p>)
    }
    else if (card == 'partial') {
        return (<p>Card is partially filled</p>)
    }
    return (<p>Card is filled</p>)
}

const Card = (props) => {
    const top = props.position.top;
    const left = props.position.left;
    // const [card, setCard] = useState(new CardFace(null, null, null, null));

    const c = new CardState(null, null, null, null)
    c.color = 'purplez'
    return (
        <div className="card" style={{'top': top, 'left': left}}>
            <div className="card-face">
                {console.log("color:", c.color)}
                <CardFace card='partial'/>
            </div>

        </div>
     );
}
 
export default Card;