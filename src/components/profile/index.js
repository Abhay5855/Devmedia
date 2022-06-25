

import { useState } from 'react';
import {message } from "antd";
import CareerInfo from './CareerInfo';
import BasicInfo from "./BasicInfo";
import './profile.css';
import {db} from "../../firebase";
import { addDoc , collection } from "firebase/firestore";


const Profile = () => {

      const [step , setStep] = useState(0);
     
      


     const [formData , setFormData] = useState({
         
        name : '',
        userName : '',
        age : 0,
        experience : 0,
        tech : '',
        github : '',
        linkedin : '',
        portfolio : '',
        blog : '',


         
        
     });


     const ChangeComponent = () => {


           if(step === 0){
              return <BasicInfo  formData={formData} setFormData={setFormData}/>
           }

           if(step === 1){

              return <CareerInfo formData={formData} setFormData={setFormData}/>
           }
     }


    //  Subit the form

    const handleSubmit = async() => {


        


       await addDoc(collection (db , 'profile') , {
        
        name : formData.name,
        userName : formData.userName,
        age : formData.age,
        experience : formData.experience,
        tech : formData.tech,
        github : formData.github,
        linkedin : formData.linkedin,
        portfolio : formData.portfolio,
        blog : formData.blog,

          
       }).then((res) => {
           console.log(res);
           message.success('Profile Created successfully');
       })
       .catch ((err) => {
             console.log(err);
             message.error('Something wrong please try again');
       })


          
    }


    const disabled = !formData.name || !formData.userName || !formData.age || !formData.experience ||  !formData.tech || !formData.github;


      return (

        <>

        <div className='profile__background'>

          <div className='color'></div>
          <div className='color'></div>
          <div className='color'></div>

        <div className="profile__container">


{/* Title */}

<div className='profile__title'>
    <h2>{step === 0 ?  "Basic Info"  : "Social Info" }</h2>

</div>



<div className='profile__content'>

  {ChangeComponent()}

</div>

{/* Footer */}

<div className='profile__footer'>

  

  <button className='prev' disabled={step === 0} onClick={() => setStep(step -1)}>Previous</button>
  <button 
     className={step === 1 ?  'submit' : 'next'}
      disabled={step === 1 ? disabled : ''} 
   onClick={() => { if(step === 1) {

       handleSubmit();

  }else {
    setStep(step + 1)

  }}}


  
  >{step === 1 ?  'Submit' : 'Next'}</button>

</div>

</div>


        </div>

       



        </>
      )
}


export default Profile;