import Card from "./Card";

const cardPositions = {
    0: {'top': '20px', 'left': '20px'},
    1: {'top': '20px', 'left': '185px'},
    2: {'top': '20px', 'left': '350px'},
    3: {'top': '20px', 'left': '520px'},
    4: {'top': '220px', 'left': '20px'},
    5: {'top': '220px', 'left': '185px'},
    6: {'top': '220px', 'left': '350px'},
    7: {'top': '220px', 'left': '520px'},
    8: {'top': '420px', 'left': '20px'},
    9: {'top': '420px', 'left': '185px'},
    10: {'top': '420px', 'left': '350px'},
    11: {'top': '420px', 'left': '520px'}
}

const Board = ({ cards, onAddCard, onInputClick }) => {
    // takes currentCards and passes the state to Card to render
    // passes down the onInput function that can be called by handleClick to update currentCards
    // renders all the cards
    return ( 
      <>
        <div className="board">
          {cards.map((card) => (
            <div className="card" style={cardPositions[card.id]}>
            <Card card={card} onInputClick={onInputClick}/>
            </div>
          ))}
        </div>
        <div style={{position:'absolute', top:'500px', left:'500px'}}>
            <button onClick={onAddCard}>Add a Card</button>
        </div>
      </>)
}
 
export default Board;