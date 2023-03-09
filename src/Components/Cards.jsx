import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    Img,
    GridItem,
    Button,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
  import styles from './Card.module.css';
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  function Cards({image , brand , name , price , id}) {
    return (
      <SimpleGrid 
// border="1px solid black"
minChildWidth="200px" spacing="40px">
 
            <Stack >



              <Box padding="15px" margin="auto" textAlign="center" boxShadow="md" width="95%" >
                <Text> {`Brand : ${brand}`} </Text>
                <br />
                <Img margin="auto" src={image } />
                {/* <Text overflow="hidden" > {elem.displayName} </Text> */}
                <br />
                <Text mb="10px" > {`$ ${price}`} </Text>
               <Link to={`/makeup/${id}`} >
               <Button>Details</Button>
               </Link>
              </Box>
            </Stack>
         
       
      </SimpleGrid>
    );
  }

  export default  Cards