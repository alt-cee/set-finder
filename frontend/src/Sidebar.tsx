import ShowSet from "./ShowSet";
import SetDataDisplay from "./SetDataDisplay";
import Upload from "./Upload";

type Props = {
    nSets: number
}

const Sidebar = ({ nSets }: Props) => {
    return (
        <div className="sidebar">
            <div className="data">
                <SetDataDisplay nSets={nSets} type='exists'/>
                <SetDataDisplay nSets={nSets} type='count'/>
            </div>
            <div className="buttons">
                <ShowSet />
            </div>
            <div className="upload">
                <Upload />
            </div>
        </div>
     );
}

export default Sidebar;
