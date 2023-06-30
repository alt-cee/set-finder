import { CardState, InputValue } from "./App";
import Card from "./Card";

const cardPositions = new Map<number, { top: string, left: string}>()
  .set(0, {'top': '20px', 'left': '20px'})
  .set(1, {'top': '20px', 'left': '185px'})
  .set(2, {'top': '20px', 'left': '350px'})
  .set(3, {'top': '20px', 'left': '520px'})
  .set(4, {'top': '220px', 'left': '20px'})
  .set(5, {'top': '220px', 'left': '185px'})
  .set(6, {'top': '220px', 'left': '350px'})
  .set(7, {'top': '220px', 'left': '520px'})
  .set(8, {'top': '420px', 'left': '20px'})
  .set(9, {'top': '420px', 'left': '185px'})
  .set(10, {'top': '420px', 'left': '350px'})
  .set(11, {'top': '420px', 'left': '520px'})

export type InputClickFunction = (id: number, type: keyof CardState, value: InputValue ) => void

type Props = {
  cards: CardState[],
  onAddCard: React.MouseEventHandler<HTMLButtonElement>,
  onInputClick: InputClickFunction
}

const Board = ({ cards, onAddCard, onInputClick }: Props) => {
    // takes currentCards and passes the state to Card to render
    // passes down the onInput function that can be called by handleClick to update currentCards
    // renders all the cards
    return (
      <>
        <div className="board">
          {cards.map((card: { id: number }) => {
            return (
              <div className="card" style={cardPositions.get(card.id)}>
                <Card card={card} onInputClick={onInputClick}/>
              </div>
            )
          })}
        </div>
        <div style={{position:'absolute', top:'500px', left:'500px'}}>
            <button onClick={onAddCard}>Add a Card</button>
        </div>
      </>)
}

export default Board;
