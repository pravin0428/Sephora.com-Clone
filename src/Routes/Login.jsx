 


import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';


const getUserData = async() => {
  let res = await fetch("https://sephoradatabse.onrender.com/users")
  let data = await res.json()
 console.log(data  , "$$$$$$$$$$$")
  return data
}
 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {isAuth , loginUser , getmobNo , logout} = useContext(AppContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [database , setDataBase] = useState([])
  console.log(database , "&&&&&7777777");
  const toast = useToast();
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    useEffect(() => {
    getUserData().then((res) =>{
      console.log(res , "&******&")
      setDataBase(res)  
    }) 
     },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = database.find(user => user.email === formData.email);
     if(foundUser){
      toast({
        title: 'Login Success!',
        description: `Welcome !`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      loginUser(true)
      navigate("/")
      // console.log("success")
     }else{
      console.log("not");
      loginUser(false)
      toast({
        title: 'User not found',
        description: 'Please Signup First!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      navigate("/register")
     }
 
  };

  return (
    <Box w={['90%', '80%', '60%']} mx="auto" mt={10}>
      <Text fontWeight="bold" fontSize="2xl" mb={4}>
        Login
      </Text>
      <form onSubmit={handleSubmit}>
         
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            borderRadius="0"
            borderColor="teal.500"
            focusBorderColor="teal.500"
            _hover={{ borderColor: 'teal.400' }}
            required
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              borderRadius="0"
              borderColor="teal.500"
              focusBorderColor="teal.500"
              _hover={{ borderColor: 'teal.400' }}
              required
            />
            <InputRightElement>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          size="lg"
          w="full"
          mt={8}
          borderRadius="0"
          _hover={{ transform: 'translateY(-2px)' }}
          _active={{ transform: 'translateY(0px)' }}
        >
          Log In
        </Button>
      </form>
       <Box margin="auto" textAlign="end" padding="10px 0px 10px 10px" ><Link to="/register" >Go to Signup</Link></Box>
    </Box>
  );
};

export default Login;