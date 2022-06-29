



import './sidebar.css';
import {useState, useEffect} from 'react';
import {  useHistory } from "react-router-dom";
import {sidebarData} from "../../data/data"
import SidebarOptions from './SidebarOptions';
import { db } from "../../firebase";

import { query, onSnapshot , collection} from "firebase/firestore";
const Sidebar = () => {


      
    
        
       

       


     
    
       
       const [user , setUser] = useState([]);
  


    // Get the details from firebase
     useEffect(() => {

        const getUserDetails = () => {


            const details = query(collection(db, "profile"))

            onSnapshot(details, (QuerySnapshot) => {
             
              setUser(
                QuerySnapshot.docs.map((doc) => ({
                  data: doc.data(),
                }))
              );
            });


        }


        getUserDetails();

     },[])
      


       return (

        <>
               
      

        <div className='sidebar__container'>

            {
                sidebarData.map((item, idx) => {
                      
                       return (
                          <div key={idx}>
                         
                          <SidebarOptions   routes={item.route} active={item.active} text={item.label} Icon={item.icon} />
                          </div>
                       )
                })
            }


            
        </div>
        
        </>
       )
}

export default Sidebar;