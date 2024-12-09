import styled from 'styled-components'
import Comment from './Comment'
import React from 'react'

const Comments = () => {
  return (
    <Container>
      <NewComment>
         <Avatar src="https://hashmikajal.com.pk/Themes/HashmiKajal/Content/homePage/images/Home-anas/11.jpg"/>
            <Input placeholder='Add a comment... '/>
       </NewComment> 
         <Comment/>
         <Comment/>
         <Comment/>
         <Comment/>
         <Comment/>
         <Comment/>
         <Comment/>
         <Comment/>
         <Comment/>
         <Comment/>
         <Comment/>
    </Container>
  )
}

export default Comments



const Container = styled.div`

`
const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;

`
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50% ;

`
const Input = styled.input`
border: none;
border-bottom:  1px solid  ${({theme})=> theme.text};
background-color: transparent;
outline: none;
padding: 5px;
width: 100%;

`



