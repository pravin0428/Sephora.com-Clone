// import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';

// function Cart({ onClearCart, onCheckout }) {

//   const [cartData , setCartData] = useState([])
//   const [loading , setLoading] = useState(false)
//   useEffect(() =>{
//     setLoading(true)
//     fetch(`http://localhost:3001/cartdata`).then((res) => res.json())
//  //   fetch(`https://database-pravin.herokuapp.com/makeup`).then((res) => res.json())
//   .then((res) =>{
//     //  console.log(res)
//    setCartData(res)
//     setLoading(false)
//   }).catch((err)=>{
//     console.log(err)
//     setLoading(false)
//   })
//   },[])
 

//   const totalPrice = cartData.reduce((total, item) => total + item.price, 0);

//   return (
//     <Box p={4} borderWidth="1px" borderRadius="md">
//       <Flex alignItems="center" justifyContent="space-between" mb={4}>
//         <Heading size="md">Shopping Cart</Heading>
//         <Button size="sm" onClick={onClearCart}>Clear Cart</Button>
//       </Flex>
//       {cartData.map(item => (
//         <Flex key={item.id} alignItems="center" mb={2}>
//            <Img margin="auto" src={item.heroImage} />
//           <Text>{item.displayName}</Text>
//           <Box ml="auto" fontWeight="bold">${item.moreColors.toFixed(2)}</Box>
//         </Flex>
//       ))}
//       <Flex alignItems="center" justifyContent="space-between" mt={4}>
//         <Text>Total:</Text>
//         <Box fontWeight="bold">${totalPrice.toFixed(2)}</Box>
//       </Flex>
//       <Button mt={4} onClick={onCheckout}>Checkout</Button>
//     </Box>
//   );
// }

// export default Cart

import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect , useState } from "react";
 
 
import { MdDelete } from "react-icons/md";
 
const Cart = () => {
  const [cartData , setCartData] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(() =>{
    setLoading(true)
    fetch(`http://localhost:3001/cartdata`).then((res) => res.json())
 //   fetch(`https://database-pravin.herokuapp.com/makeup`).then((res) => res.json())
  .then((res) =>{
    //  console.log(res)
   setCartData(res)
    setLoading(false)
  }).catch((err)=>{
    console.log(err)
    setLoading(false)
  })
  },[])

  let total = 0;

  for (let i = 0; i < cartData.length; i++) {
    total += cartData[i].price * cartData[i].count;
  }
  let discount = Math.floor((total / 100) * 10);

 

  return (
    <>
    
   

      <Box
        display={{ lg: "flex" }}
        justifyContent="space-around"
        w="90%"
        m="auto"
        // border="4px solid teal"
      >
        <Box
        //  border="2px solid yellow"
        >
          <Box
          // border="3px solid grey"
          >
         
          </Box>
          <Box w={{ sm: "100vw", md: "60vw", lg: "30vw" }} m="auto">
            <TableContainer boxShadow={"xl"} mt="10px" mb="25px">
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>Label</Th>
                    <Th isNumeric>Ammount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Total Ammount</Td>
                    <Td isNumeric>₹ {Math.floor(total)}</Td>
                  </Tr>
                  <Tr>
                    <Td>Discount</Td>
                    <Td isNumeric>- ₹ {discount}</Td>
                  </Tr>

                  <Tr>
                    <Td>Finel Ammount</Td>
                    <Td isNumeric>₹ {Math.floor(total - discount)}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Box
              boxShadow={"2xl"}
              background="black"
              textAlign={"center"}
              p={"3"}
              w={{ sm: "40vw", md: "25vw", lg: "20vw" }}
              m={"auto"}
              color="white"
              cursor={"pointer"}
              // onClick={() => loadRazorpay(Math.floor(total - discount))}
            >
              PAY NOW
            </Box>
          </Box>
        </Box>

        {/* cart cards */}

        <Box
          w={{ sm: "100%", md: "40%", lg: "40%" }}
          margin="auto"
          // border="4px solid purple"
          p={4}
          boxShadow="xl"
        >
          <p>List of Your cart Products</p>
          <br />
          {cartData?.map((elem) => (
            <Box
              key={elem.id}
              width="100%"
              h="200px"
              m="auto"
              pb={2}
              display="flex"
              justifyContent="space-between"
              // border="2px solid green"
            >
              <Box h="100%">
                <Image h="100%" src={elem.heroImage} />
              </Box>
              <Box
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
              >
                <h1
                  style={{
                    fontWeight: "700",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                >
                  {elem.brandName}
                </h1>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  g={{ sm: "10vw", lg: "20vw" }}
                  //  border="2px solid red"
                  width="240px"
                >
                  <p style={{ textAlign: "left" }}>Price: ${elem.moreColors}</p>
                  <Box display="flex" justifyContent="space-evenly">
                    <Button
                      backgroundColor="red"
                      color="white"
                      textAlign={"center"}
                      cursor={"pointer"}
                   //   onClick={() => handleUpdate(elem.id, elem.count - 1)}
                    >
                      {elem.count !== 1 ? "-" : <MdDelete />}
                    </Button>
                    <Button textAlign={"center"} cursor={"pointer"}>
                      {elem.count}
                    </Button>
                    <Button
                      backgroundColor="green.500"
                      color="white"
                      textAlign={"center"}
                      cursor={"pointer"}
                      //onClick={() => handleUpdate(elem.id, elem.count + 1)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Cart;