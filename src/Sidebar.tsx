import ShowSet from "./showSet";
import SetDataDisplay from "./SetDataDisplay";
import Upload from "./Upload";

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="data-display">
                <SetDataDisplay />
                <SetDataDisplay />
            </div>
            <div>
                <ShowSet />
            </div>
            <div>
                <Upload />
            </div>
        </div>
     );
}
 
export default Sidebar;