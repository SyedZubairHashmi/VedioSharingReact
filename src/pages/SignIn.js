import React from 'react'
import styled from 'styled-components'

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to HashmiTube</SubTitle>
            <Input placeholder='username'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign in</Button>
            <Title>or</Title>
            <Input placeholder='username'/>
            <Input placeholder='email'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English(USA)
            <Links>
               <Link>Help</Link>
               <Link>Privacy</Link>
               <Link>Terms</Link>
            
            </Links>
        </More>
    </Container>
  )
}

export default SignIn

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
color: ${({theme})=>theme.text};

`
const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color:${({theme})=>theme.bgLighter} ;
padding: 20px 50px;
border: 1px solid ${({theme})=>theme.soft} ;
gap: 10px;
`

const Title = styled.h1`
margin: 0px;
`
const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
margin: 0px;


`
const Input = styled.input`
border: 1px solid  ${({theme})=>theme.soft};
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;
`
const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: ${({theme})=>theme.soft};
color: ${({theme})=>theme.text};
`
const  More = styled.div`
display: flex;
font-size: 12px;
margin-top: 10px;
color: ${({theme})=>theme.textsoft};
`
const  Links = styled.div`
margin-left: 20px;
`
const  Link = styled.span`
margin-left: 50px;
`

