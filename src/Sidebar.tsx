import ShowSet from "./showSet";
import SetDataDisplay from "./SetDataDisplay";
import Upload from "./Upload";

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="data">
                <SetDataDisplay nSets={5}/>
                <SetDataDisplay nSets={10}/>
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