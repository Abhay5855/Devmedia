import { Button } from "antd";
import "./home.css";

const Home = () => {
  return (
    <>
      <header className="home__container">
        <div className="home__content">
          <h1>The all in one social place for all developers.</h1>
            
            <div className="home__btn__container">

            <Button className='home__button'>Create account</Button>

            </div>
         
        </div>
      </header>
    </>
  );
};

export default Home;
