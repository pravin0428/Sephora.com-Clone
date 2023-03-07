import { Box, Container, Image , SimpleGrid, Text , Stack , Img, Spacer, FormLabel, FormControl , Select, GridItem, Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from "react-router-dom"
import Cards from '../Components/Cards'
function Makeup() {
const [makeup , setMakeup] = useState([])
const [loading , setLoading] = useState(false)

const handleClickF =() => {
  const result = makeup.filter((currData)=>{
    return currData.cat === "foundation";
})
setMakeup(result)
 }

 const handleClickS =() => {
  const result = makeup.filter((currData)=>{
    return currData.cat === "ss";
})
setMakeup(result)
 }

  useEffect(() =>{
    setLoading(true)
    fetch(`https://sephoradatabse.onrender.com/makeup`).then((res) => res.json())
 //   fetch(`https://database-pravin.herokuapp.com/makeup`).then((res) => res.json())
  .then((res) =>{
     console.log(res)
    setMakeup(res)
    setLoading(false)
  }).catch((err)=>{
    console.log(err)
    setLoading(false)
  })
  },[])
 

 

  return (
    <> 
    <Container maxW='550%' mt="15px"  mb="15px"  >
    <Box className="row7th_img" >
    <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg" alt="makeupmainImg" /> </Box>
    </Box>
    </Container>

    {/* side section of liks */}

    <Box width="100%" border="3px solid green" display={{base : "inline-block" , sm : "flex"}} justifyContent="space-around" >
    <Container spacing="70px" width={{base : "100%" , sm : "32%" , md : "32%" , lg : "32%"}}  ml="-1px" mt="20px" border="2px solid green" margin={{base : "auto" , sm : 0 , md : 0 , lg : 0}}  
   // display={{base : "flex" , sm : "inline-block" , md : "inline-block", lg : "inline-block"}} 
    >
  
  <div className="dropdown">
  <button className="dropbtn">FACE</button>
  <div className="dropdown-content"  >
  {/* <Link to="/foundation">Foundation</Link> */}
  <Text as="button" p={2}  onClick={handleClickF} > Foundation </Text>
 
  <Text as="button" p={2} onClick={handleClickS} > BB & CC Cream </Text>
  {/* <a href="#">BB & CC Cream</a> */}
  {/* <a href="#">Concellere</a> */}
  {/* <a href="#">Face Primer</a>
  <a href="#">Highlighter</a> */}
  </div>
</div>

<div className="dropdown">
  <button className="dropbtn">CHEEK</button>
  <div className="dropdown-content">
  <a href="#">Blush</a>
  <a href="#">Bronzer</a>
  <a href="#">Hightlighter</a>
  </div>
</div>

 

<div className="dropdown">
<button className="dropbtn">EYE</button>
<div className="dropdown-content">
    <a href="#" >Eye Palette</a>
    <a href="#" >Mascara</a>
    <a href="#" >Eyeliner</a>
    <a href="#" >Eyebrow</a>
    <a href="#" >Eyeshadow</a>
    <a href="#" >Eye Primer</a>
    <a href="#" >Under-Eye Concealer</a>
    </div>
  </div>

  <div className="dropdown">
  <button className="dropbtn">LIP</button>
  <div className="dropdown-content">
  <a href="/">Foundation</a>
  <a href="#">BB & CC Cream</a>
  <a href="#">Concellere</a>
    </div>
</div>

<div className="dropdown">
  <button className="dropbtn">BRUSH AND APPLICATORS</button>
  <div className="dropdown-content">
  <a href="/">Foundation</a>
  <a href="#">BB & CC Cream</a>
  <a href="#">Concellere</a>
  <a href="#">Face Primer</a>
  <a href="#">Highlighter</a>
  </div>
</div>
 
<div className="dropdown">
  <button className="dropbtn">ACCESSORIES</button>
  <div className="dropdown-content">
  <a href="/">Foundation</a>
  <a href="#">BB & CC Cream</a>
  <a href="#">Concellere</a>
  <a href="#">Face Primer</a>
  <a href="#">Highlighter</a>
  </div>
</div>
 
<div className="dropdown">
  <button className="dropbtn">NAIL</button>
  <div className="dropdown-content">
  <a href="/">Foundation</a>
  <a href="#">BB & CC Cream</a>
  <a href="#">Concellere</a>
  <a href="#">Face Primer</a>
  <a href="#">Highlighter</a>
  </div>
</div>

<div className="dropdown">
  <button className="dropbtn">MAKEUP PALETTE</button>
  <div className="dropdown-content">
  <a href="/">Foundation</a>
  <a href="#">BB & CC Cream</a>
  <a href="#">Concellere</a>
  <a href="#">Face Primer</a>
  <a href="#">Highlighter</a>
  </div>
</div>
 
<div className="dropdown">
  <button className="dropbtn">VEGAN</button>
  <div className="dropdown-content">
  <a href="/">Foundation</a>
  <a href="#">BB & CC Cream</a>
  <a href="#">Concellere</a>
  <a href="#">Face Primer</a>
  <a href="#">Highlighter</a>
  </div>
</div>
</Container>



<Box width="76%"  margin={{base : "auto" , sm : 0 , md : 0 , lg : 0}} >
<SimpleGrid border="1px solid black" minChildWidth="200px" spacing="40px">
        {makeup &&
          makeup.map((elem) => (
            <Stack key={elem.id}>
              <Box padding="15px" margin="auto" textAlign="center"  >
                <Text> {`Brand : ${elem.brandName}`} </Text>
                <br />
                <Img src={elem.heroImage} />
                {/* <Text overflow="hidden" > {elem.displayName} </Text> */}
                <br />
                <Text mb="10px" > {`$ ${elem.moreColors}`} </Text>
               <Link to={`/makeup/${elem.id}`} >
               <Button>Details</Button>
               </Link>
              </Box>
            </Stack>
          ))}
       
      </SimpleGrid>
      </Box>
 

    </Box>
     


    
    </>
  )
}

export default Makeup