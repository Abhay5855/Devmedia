
import {
    Route,
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import Sidebar from "../components/sidebar/index"
import Profile from "../components/profile";
import ProfileView from "../components/profile_view";
import Home from "../components/home";
import { HomeContainer } from "../containers/HomeContainer";
import { SidebarContainer } from "../containers/SidebarContainer";
import { MiddleContainer } from "../containers/MiddleContainer";
import { RestContainer } from "../containers/RestContainer";
import Tweet from "../components/tweets_display";
import Bookmarks from "../components/bookmarks";
import Explore from "../components/explore";


const Routes = () => {




      return (

        <Router>

            <Switch>

                <Route exact path='/' component={Home}/>
                <Route exact path='/details' component={Profile}/>

               
                <HomeContainer>


               
                 <SidebarContainer>

                 <Sidebar />

                 </SidebarContainer>
               

                  <MiddleContainer>

                  
                   

                    <Route exact path='/profile' component={ProfileView}/>
                    <Route exact path='/home' component={Tweet}/>
                    <Route exact path='/bookmarks' component={Bookmarks}/>
                    <Route exact path='/explore' component={Explore}/>

                
                  </MiddleContainer>

                    
                    
                <RestContainer>


</RestContainer> 
          

                </HomeContainer>
            

                

            </Switch>

      
        
        </Router>
      )
}

export default Routes;