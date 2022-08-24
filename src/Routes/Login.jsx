import { Button, Container, Input, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Login() {
     const [email , setEmail] = useState([])
 let arr = JSON.parse(localStorage.getItem("loginInfo")) || []
const handleSubmit = (e) =>{
    e.preventDefault()
   setEmail(e.target.value)
   arr.push(email)
   localStorage.setItem("loginInfo",JSON.stringify(arr))
}


  return (
    <>
    <Container textAlign="center" > 
     <form onSubmit={handleSubmit} >
        <h2>Login</h2>
        <br/>
     
       <label>
        Enter Your Phone/Email 
        <br/>
        <input placeholder='enter email'/>
       </label>
      
     <input type="submit" value="submit" /> 
       
     </form>
     </Container>
    </>
  )
}

export default Login