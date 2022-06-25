

import styled from 'styled-components'

import {useHistory} from "react-router-dom";

const TweetNavbar = () => {


      const history =  useHistory();

       return (

        <Container>
         
        <Text onClick={() => history.push('/home')}>Home</Text>

               
        </Container>
       )
}


export default TweetNavbar;



const Container = styled.div`

display : flex;
align-items : center;
justify-content : space-between;


`;


const Text = styled.h2`

color : #E7E9EA;
font-size : 1.5em;
font-weight : 700px;
cursor : pointer;

`;