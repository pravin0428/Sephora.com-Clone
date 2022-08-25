import {  Container  } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react'
 
  import { useNavigate } from "react-router-dom"
import { AppContext } from '../Context/AppContext'
let arr = JSON.parse(localStorage.getItem("loginInfo")) || []

function Login() {
     const [mobNo , setMobNo] = useState([])
     const {loginUser} = useContext(AppContext)
  const navigate = useNavigate()

const handleSubmit = (e) =>{
    e.preventDefault()
   
   arr.push(mobNo)
   localStorage.setItem("loginInfo",JSON.stringify(arr))
   loginUser(mobNo)
    navigate("/register")
 
}
 
// console.log(arr)
// console.log(mobNo)
  return (
    <>
    <Container textAlign="center" > 
     <form onSubmit={handleSubmit} >
        <h2>Login</h2>
        <br/>
     
       <label>
        Enter Your Phone/Email 
        <br/>
        <input onChange={(e) => setMobNo(e.target.value)} value={mobNo} placeholder='enter email'/>
       </label>
      
     <input type="submit" value="submit" /> 
       
     </form>
     </Container>
    </>
  )
}

export default Login