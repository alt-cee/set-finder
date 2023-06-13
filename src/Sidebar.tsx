import ShowSet from "./showSet";
import SetDataDisplay from "./SetDataDisplay";
import Upload from "./Upload";

const Sidebar = () => {
    return ( 
        <aside>
            This is the sidebar.
            <SetDataDisplay />
            <SetDataDisplay />
            <ShowSet />
            <Upload />
        </aside>
     );
}
 
export default Sidebar;