type Props = {
    nSets: number,
    type: 'exists' | 'count'
}

const SetDataDisplay = ({ nSets, type }: Props) => {
    if (type === 'exists') {
        return (
            <div className="data-display">
                <h1>Sets Exist? {nSets === null ? 'False' : 'True'}</h1>
            </div>
         )
    }
    else {
        return (
            <div className="data-display">
                <h1>There are {nSets === null ? '?' : nSets} sets</h1>
            </div>
         )
    }
}

export default SetDataDisplay;
