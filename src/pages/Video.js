import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments';
import Card from '../components/Card';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
           width="100%"
           height="720"
           src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
           title='YouTube video player'
           frameborder="0"
           allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
           allowFullScreen
          
          >

          </iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>

          <Info>79,813 views . Jun 22, 2024</Info>
          <Buttons>
                <Button><ThumbUpOffAltOutlinedIcon/>123</Button>
                <Button><ThumbDownOutlinedIcon/>Dislike</Button>
                <Button><ReplyOutlinedIcon/>Share</Button>
                <Button><AddTaskOutlinedIcon/>Save</Button>

          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src='https://hashmikajal.com.pk/Themes/HashmiKajal/Content/homePage/images/Home-anas/11.jpg'/>
            <ChannelDetail>
              <ChannelName>Hashmi</ChannelName>
              <ChannelCounter>200k subscriber</ChannelCounter>
              <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ad nobis, quisquam earum laboriosam eligendi totam itaque corporis repellat quo esse ut magni, laborum sapiente ipsam illum ducimus modi iure.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>

      </Content>
      <Recommendation>
        
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      
      
      </Recommendation>
    </Container>
  )
}

export default Video


const Container = styled.div`
// background-color: ${({theme})=> theme.bgLighter};
// color: ${({theme})=> theme.text};
display: flex;
gap: 24px;

`

const Content = styled.div`
flex: 5;
`
const Recommendation = styled.div`
flex: 2;
`
const VideoWrapper = styled.div`

`
const Title= styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({theme})=> theme.text};

`
const Details= styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const Info= styled.span`
color: ${({theme})=> theme.textSoft};

`
const Buttons= styled.div`
display: flex;

gap: 20px;
color: ${({theme})=> theme.text};

`
const Button= styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;

`
const Hr = styled.hr`
margin: 15px 0px;
border: 0cap.5px solid ${({theme})=> theme.soft};
`

const Channel = styled.div`
display: flex;
justify-content: space-between;
`
const ChannelInfo = styled.div`
display: flex;
gap: 20px;

`

const Image = styled.img`
height: 50px;
width: 50px;
border-radius: 50px;

`
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({theme})=> theme.text};

`
const ChannelName = styled.span`

`
const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color: ${({theme})=> theme.textSoft};
font-size: 12px;

`
const Description = styled.p`
font-size: 14px;

`
const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 500;
color: ${({theme})=> theme.text};
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
border: none;


`



