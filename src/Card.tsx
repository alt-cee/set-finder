import { ReactComponent as Diamond } from './assets/diamond.svg'
import { ReactComponent as Oval } from './assets/oval.svg'
import { ReactComponent as Tilde } from './assets/tilde.svg'

const Card = (props) => {
    const top = props.position.top;
    const left = props.position.left;

    return (
        <div className="card" style={{'top': top, 'left': left}}>
            <div className="card-face">
                <Tilde />
                <Diamond />
                <Oval />
            </div>

        </div>
     );
}
 
export default Card;