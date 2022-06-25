

import './sidebar.css'
import {Link} from "react-router-dom";


const SidebarOptions = ({text , Icon, active, routes}) => {


        return (

              <>
          

            <Link to={routes}>

            <div className={`sidebaroptions ${active && 'sidebaroptions--active'}`}>

                  

                  <div className='icons'>{Icon}</div>
                  <h1 className='icon__text'>{text}</h1>



            </div>

            </Link>

           

            </>
        )
}

export default SidebarOptions;