

import styled from 'styled-components'
import { Input } from 'antd';
import { IoMdPhotos, IoMdPlayCircle  } from "react-icons/io";

const { TextArea } = Input;
const TweetUpload = () => {

      
        return (


              <Container>


                <TextBox>
                    
                    <Img src='https://pbs.twimg.com/profile_images/993786179802853376/OoRcUdjq_400x400.jpg' alt='img'/>

                   
                    <div style={{display : 'flex' , flexDirection :'column', width : '100%'}}>

                    <TextArea style={{background : '#28343E', borderRadius : '8px' , color : '#AFB8BD', fontSize : '1em' , fontWeight: '700'  , width : '100%' , letterSpacing : '0.1em'}} rows={4} placeholder="What's happening ?" maxLength={300} />
  
                    <Add>
                    
                    <IconContainer>
                    <IoMdPhotos  style={{fontSize : '22px', color : '#00BA7C', cursor : 'pointer'}} />
                    <Text>Photo</Text>
                    </IconContainer>

                    <IconContainer>
                    <IoMdPlayCircle  style={{fontSize : '22px', color : '#00BA7C', cursor : 'pointer'}} />
                    <Text>Video</Text>
                    </IconContainer>
                  
                    <Tweet>
                       Tweet
                    </Tweet>


                </Add>


                    </div>
                 
                </TextBox>


               
               


              </Container>

        )
}


export default TweetUpload;


const Container = styled.div`

border-radius : 8px;
background : #28343E;
margin-top : 0.5em;
width : 100%;
height : auto;

`;


const TextBox = styled.div`

display : flex;
padding : 1em;

`;

const Img =  styled.img`

width : 60px;
height : 60px;
border-radius : 50%;
margin-right : 1em;

`

const Add = styled.div`

display : flex;
align-items : center;
justify-content: space-between;
margin-top : 1em;
`

const IconContainer =  styled.div`

padding : 0.5em 1.2em 0.5em 1.2em;
border-radius : 999999px;
border:0.5px solid #71767B;
display : flex;
align-items : center;
justify-content : center;
cursor : pointer;
`

const Text = styled.h2`
margin-left : 0.75em;
color : #fff;
font-size : 1.2em;
font-weight : 400;
`;

const Tweet = styled.button`

width : 50%;
color : #fff;
background : #00BA7C;
padding : 0.5em 1.2em 0.5em 1.2em;
border-radius : 30px;
border : none;
outline : none;
font-size : 1.3em;
font-weight : 600;
cursor : pointer;

`;
