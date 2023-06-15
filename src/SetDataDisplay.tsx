const SetDataDisplay = (props) => {
    const nSets = props.nSets;
    return ( 
        <div className="data-display">
            <h1>There are {nSets} sets</h1>
        </div>
     );
}
 
export default SetDataDisplay;