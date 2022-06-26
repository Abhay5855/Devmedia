
import './App.css';
import Routes from "./routes/index";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <div className="App">


      <RecoilRoot>

      <Routes/>

      </RecoilRoot>

      
   
    </div>
  );
}

export default App;
