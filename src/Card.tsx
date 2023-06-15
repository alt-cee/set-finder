import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'
import { useState } from 'react';

class CardFace {
    constructor(
        color: string | null, 
        fill: string | null,
        shape: ReactComponent | null,
        count: number | null) {
        this.color = color; // {red, purple, green}
        this.fill = fill; // {blank, stripe, solid}
        this.shape = shape; // {oval, diamond, tilde}
        this.count = count; // {1, 2, 3}
    }
    // TODO: add public method for callees to determine if null or not
}

const Card = (props) => {
    const top = props.position.top;
    const left = props.position.left;
    const [card, setCard] = useState(new CardFace(null, null, null, null));
    //const card = new CardFace("purple", "url(#diagonalHatch)", Oval, 2)

    function Shape({card}) {
        if (card.color == null || card.fill == null || card.shape == null || card.count == null) {
            return <p>Empty!</p>
        }
        const CardShape=card.shape; 
        return <CardShape color={card.color} fill={card.fill} />
    }

    //TODO: improve the shape repetition
    return (
        <div className="card" style={{'top': top, 'left': left}}>
            <div className="card-face">
                {[...Array(card.count)].map((value) => <Shape card={card} />)} 
            </div>

        </div>
     );
}
 
export default Card;