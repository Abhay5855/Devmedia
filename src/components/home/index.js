
import {useUserAuth} from "../hooks/useAuth";
import 'antd/dist/antd.css';
import "./home.css";

const Home = () => {

  const { googleSignIn} = useUserAuth();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
       console.log('login successful');
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  };


    
  return (
    <>
      <header className="home__container">
        <div className="home__content">
          <h1>The all in one social place for all developers.</h1>
            
            <div className="home__btn__container">

            <button onClick={handleGoogleSignIn} className='home__button' >Create account</button>

            </div>


          
           
         
        </div>
      </header>
    </>
  );
};

export default Home;
