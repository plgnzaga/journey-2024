import AppContext from "@/common/AppContext";
import { useContext } from "react";


const Sidebar = () => {
    const {currentTab,setCurrentTab} = useContext(AppContext)
    return <>
        <div id="sidebar" className="border-r border-white h-screen fixed left-0 top-0 w-[60px] bg-transparent flex flex-col items-center justify-center text-white">
            {Array.from({ length: 5 }, (_, index) => (
                <span key={index} 
                className={`${(index + 1) == currentTab ? 'active' : ''}`}
                onClick={() => {setCurrentTab(index + 1)}}
                >&bull;</span>
            ))}
        </div>
    </>
}
export default Sidebar;