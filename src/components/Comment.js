import styled from 'styled-components'

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://r2.erweima.ai/imgcompressed/compressed_2cd9d869dcbaf0b1ceda19f6d4284c26.webp'/>
      <Details>
         <Name>Syed Zubair hashmi <Date>1 day ago</Date></Name>
         <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut facilis earum minima ea esse est autem. Quas aliquam explicabo necessitatibus dolor mollitia, eveniet, ex saepe fugiat laborum, obcaecati expedita.
         </Text>
      </Details>
    </Container>
  )
}

export default Comment

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;

`

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50% ;

`
const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({theme})=>theme.text} ;
`

const Name = styled.span`
font-size: 15px;
font-weight: 500;

`
const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme})=>theme.textSoft};
margin-left: 5px;
`
const Text = styled.span`
font-size: 14px;

`
