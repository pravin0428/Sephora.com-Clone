// import {  Container  } from '@chakra-ui/react'
// import React, { useContext } from 'react'
// import { useState } from 'react'
// // import ModalComponent from "../Components/ModalComp" 
//   import { useNavigate } from "react-router-dom"
// import { AppContext } from '../Context/AppContext'
// let arr = JSON.parse(localStorage.getItem("loginInfo")) || []

// function Login() {
//      const [mobNo , setMobNo] = useState([])
//      const {loginUser} = useContext(AppContext)
//   const navigate = useNavigate()

// const handleSubmit = (e) =>{
//     e.preventDefault()
   
//    arr.push(mobNo)
//    localStorage.setItem("loginInfo",JSON.stringify(arr))
//    navigate("/register")
//    loginUser(mobNo)
    
 
// }
 
// // console.log(arr)
// // console.log(mobNo)
//   return (
//     <>
//     <Container textAlign="center" > 
//      <form onSubmit={handleSubmit} >
//         <h2>Login</h2>
//         <br/>
     
//        <label>
//         Enter Your Phone/Email 
//         <br/>
//         <input onChange={(e) => setMobNo(e.target.value)} value={mobNo} placeholder='enter email'/>
//        </label>
      
//      <input type="submit" value="submit" /> 
     
//      </form>
//      </Container>
//     </>
//   )
// }

// export default Login


import { Button, Img, Input } from "@chakra-ui/react";
import React, { useState } from "react";
 
 
function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  // User Login info
  const database = [
    {
      username: "mohite461998@gmail.com",
      password: "1234"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div >
      <form onSubmit={handleSubmit}>
        <div  >

        <p style={{fontWeight: "lighter" , fontSize:"15px"  }} >Enter Your Phone/Email</p>
  <Input width="100%" borderRadius="0px" type="text" name="uname" required  />
  <br />
  <br />
          {/* <label>Username </label>
          <input type="text" name="uname" required /> */}
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
        <Input width="100%" borderRadius="0px" type="password" name="pass" required   />
          {/* <label>Password </label>
          <input type="password" name="pass" required /> */}
          {renderErrorMessage("pass")}
        </div>

        <br />
        <br />

        <div  >
          {/* <Input type="submit" /> */}
          <Button width="100%" bg="#f39" borderRadius="0px" type="submit" > CONTINUE </Button>
        </div>
      </form>
      <br />
<br />
 <p>------------------------------or------------------------------</p>
 <br />
 <br />
 <Button bg="#4285f4" width="100%" borderRadius="0px" >
    <Img  width="30px" marginRight="350px" src="https://th.bing.com/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=ImgDet&rs=1" />
 </Button>
<br />
<br />
<Button alignContent="center" bg="#3b5998" width="100%" borderRadius="0px" >
    <Img width="30px" marginRight="350px" src="https://static.nnnow.com/facebook.png" />
  </Button>
    </div>
  );

  return (

    <div className="app">
      <div >
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      
    </div>
  );
}

export default Login;