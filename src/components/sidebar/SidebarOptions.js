

import './sidebar.css'
import {Link} from "react-router-dom";


const SidebarOptions = ({text , Icon, active, routes}) => {


        return (

              <>
            <div className='sidebaroptions__container'>

            </div>

            <Link to={routes}>

            <div active  className='sidebaroptions'>

                  

                  <div className='icons'>{Icon}</div>
                <h2 className='text'>{text}</h2>

                 
              



            </div>

            </Link>

            </>
        )
}

export default SidebarOptions;