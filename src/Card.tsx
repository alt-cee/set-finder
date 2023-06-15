import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'

const Card = (props) => {
    const top = props.position.top;
    const left = props.position.left;
    const cardColor = "purple"; // {red, purple, green}
    const cardFill = "url(#diagonalHatch)"; // {blank, stripe, solid}
    const cardShape = Diamond; // {oval, diamond, tilde}
    const cardCount = 3; // {1, 2, 3}

    function Shape() {
        const CardShape=cardShape; 
        return <CardShape color={cardColor} fill={cardFill}/>;
    }
    
    return (
        <div className="card" style={{'top': top, 'left': left}}>
            <div className="card-face">
                {[...Array(cardCount)].map((value) => (Shape()))}
            </div>

        </div>
     );
}
 
export default Card;