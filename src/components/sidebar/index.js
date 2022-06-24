



import './sidebar.css';
import {sidebarData} from "../../data/data"
import SidebarOptions from './SidebarOptions';
const Sidebar = () => {


       return (

        <>
               
      

        <div className='sidebar__container'>

            {
                sidebarData.map((item, idx) => {
                      
                       return (
                          <div key={idx}>
                         
                          <SidebarOptions active={item.active} text={item.label} Icon={item.icon} />
                          </div>
                       )
                })
            }
            
        </div>
        
        </>
       )
}

export default Sidebar;