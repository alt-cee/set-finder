import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'

const Card = (props) => {
    const top = props.position.top;
    const left = props.position.left;
    class CardFace {
        constructor(
            color: string, 
            fill: string,
            shape: ReactComponent,
            count: number) {
            this.color = color; // {red, purple, green}
            this.fill = fill; // {blank, stripe, solid}
            this.shape = shape; // {oval, diamond, tilde}
            this.count = count; // {1, 2, 3}
        }
    }
    const card = new CardFace("purple", "url(#diagonalHatch)", Oval, 3)

    function Shape() {
        const CardShape=card.shape; 
        return <CardShape color={card.color} fill={card.fill}/>;
    }
    
    return (
        <div className="card" style={{'top': top, 'left': left}}>
            <div className="card-face">
                {[...Array(card.count)].map((value) => (Shape()))}
            </div>

        </div>
     );
}
 
export default Card;