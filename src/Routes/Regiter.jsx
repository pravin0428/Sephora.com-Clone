import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Regiter() {
  
    const {getmobNo} = useContext(AppContext)
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleRegSubmit =(e) =>{
       e.prventDefault()
    }
    
  return (
     <form onSubmit={handleRegSubmit}>
        <input type="text" placeholder='name' value={name} onChange={(e)=> setName(e.target.value)} />
        <input type="email" placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type="" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
        <input> {getmobNo} </input>
        <input type="submit" value="submit" />
     </form>
  )
}

export default Regiter