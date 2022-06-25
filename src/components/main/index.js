


import "./main.css"
import Sidebar from "../sidebar/index"
import ProfileView from "../profile_view/index";

const Main = () => {

     return (

        <div className='main'>
        <div className='main__container'>

                <Sidebar />


        </div>

        {/* Profile */}

        <ProfileView />
        
        
        </div>
     )
}


export default Main;