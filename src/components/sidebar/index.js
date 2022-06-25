



import './sidebar.css';
import {useState, useEffect} from 'react';
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
      


       console.log(user);


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

{/* 
             <div className='sidebaroptions__user'>

                {

                    user?.map((item, idx) => {

                         return (

                          <>
                          
                          <img  src='https://pbs.twimg.com/profile_images/993786179802853376/OoRcUdjq_400x400.jpg' alt=''/>

                          <div className='sidebar__profile'>

                            <p style={{color: 'white'}}>{item.data.name}</p>
                            <p style={{color: 'white'}}>{item.data.userName}</p>
                            
                          </div>
                          </>

          
                         )


                    })
                }
                
              

            </div> */}
            
        </div>
        
        </>
       )
}

export default Sidebar;