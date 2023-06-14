const Card = (props) => {
    const top = props.position.top;
    const left = props.position.left;

    return ( 
        <div className="card" style={{'top': top, 'left': left}}>
            <p>This is a card</p>
        </div>
     );
}
 
export default Card;