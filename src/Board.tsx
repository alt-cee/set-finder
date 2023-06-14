import Card from "./Card";

const Board = () => {
    return ( 
        <div className="board">
            <div className="board-row">
                <Card position={{'top': '20px', 'left': '20px'}}/>
                <Card position={{'top': '20px', 'left': '185px'}}/>
                <Card position={{'top': '20px', 'left': '350px'}}/>
                <Card position={{'top': '20px', 'left': '520px'}}/>
            </div>
            <div className="board-row">
                <Card position={{'top': '220px', 'left': '20px'}}/>
                <Card position={{'top': '220px', 'left': '185px'}}/>
                <Card position={{'top': '220px', 'left': '350px'}}/>
                <Card position={{'top': '220px', 'left': '520px'}}/>
            </div>
            <div className="board-row">
                <Card position={{'top': '420px', 'left': '20px'}}/>
                <Card position={{'top': '420px', 'left': '185px'}}/>
                <Card position={{'top': '420px', 'left': '350px'}}/>
                <Card position={{'top': '420px', 'left': '520px'}}/>
            </div>
        </div>
     );
}
 
export default Board;