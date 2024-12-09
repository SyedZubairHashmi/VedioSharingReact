import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = ({type}) => {
  return (
    <Link to="/video/test"  style={{textDecoration:"none"}}>
    <Container type={type}>
        <Image type={type} src="https://variety.com/wp-content/uploads/2020/06/youtube-logo.png?w=999&h=562&crop=1"/>
        <Details type={type}>
            <ChannelImage  type={type}src="https://hashmikajal.com.pk/Themes/HashmiKajal/Content/homePage/images/Home-anas/11.jpg"/>
            <Texts>
                <Title>Test video</Title>
                <ChannelName>Hashmi</ChannelName>
                <Info>423,233 views . 1 day ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card

const Container = styled.div`
width: ${(props)=>props.type !== "sm" && "360px" };
margin-bottom:${(props )=>props.type === "sm" ? "10px" : "45px"};
cursor: pointer;
display: ${(props)=>props.type === "sm" && "flex" };
gap: 10px;


`

const Image = styled.img`
width: 100%;
height:${(props )=>props.type === "sm" ? "120px" : "202px"};
background-color: #999;
flex: 1;


`

const Details = styled.div`
 display: flex;
 margin-top: ${(props)=>props.type !== "sm" && "16px" };
 gap: 10px;
 flex: 1;
`
const ChannelImage = styled.img`
 width: 36px;
 height: 36px;
 border-radius: 50%;
 background-color: #999;
 margin-top: 15px;
 display: ${(props)=>props.type === "sm" && "none" };
`
const Texts = styled.div`

`
const Title = styled.h1`

font-size: 16px;
font-weight: 500;
color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
font-size: 14px;
color:${({theme}) => theme.text} ;
margin: 7px 0px;

`
const Info = styled.div`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
`

