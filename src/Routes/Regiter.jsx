import { useState } from 'react';
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

const Regiter = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toast = useToast();
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
     let payload = {
        ...formData , 
        id : Date.now()
     }

     axios.post("https://sephoradatabse.onrender.com/users" , payload)
     .then((res) =>{
      console.log(res)
     toast({
         title: 'Signup Success!',
         description: `Welcome, ${formData.name}!`,
         status: 'success',
         duration: 5000,
         isClosable: true,
       });
       navigate("/login")
     }).catch((err) => {
      console.log(err);
      toast({
         title: 'Signup Failure!',
         description: "Somthing went wrong",
         status: 'warning',
         duration: 2000,
         isClosable: true,
       });
       navigate("/register")
     })

 
  };

  return (
    <Box w={['90%', '80%', '60%']} mx="auto" mt={10}>
      <Text fontWeight="bold" fontSize="2xl" mb={4}>
        Sign Up
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            borderRadius="0"
            borderColor="teal.500"
            focusBorderColor="teal.500"
            _hover={{ borderColor: 'teal.400' }}
            required
          />
        </FormControl>
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
          Sign Up
        </Button>
      </form>
      <Box margin="auto" textAlign="end" padding="10px 0px 10px 10px" ><Link to="/login" >Go to Login</Link></Box>
    </Box>
  );
};

export default Regiter;