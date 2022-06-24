

import './sidebar.css'

import { doc } from "firebase/firestore";
import { db } from "../../firebase";


const SidebarOptions = ({text , Icon, active}) => {


        return (

              <>
            <div className='sidebaroptions__container'>

            </div>

            <div active  className='sidebaroptions'>


                <div className='icons'>{Icon}</div>
                <h2 className='text'>{text}</h2>



            </div>

            </>
        )
}

export default SidebarOptions;