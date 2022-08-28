import { Box, Container, Image , SimpleGrid, Text , Stack , Img, Spacer, FormLabel, FormControl , Select} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
 
function ToolAndBrushes() {
const [makeup , setMakeup] = useState([])
  useEffect(() =>{
  fetch(`https://database-pravin.herokuapp.com/toolandbrush`).then((res) => res.json())
  .then((res) =>{
    // console.log(res)
    setMakeup(res)
  }).catch((err)=>{
    console.log(err)
  })
  },[])

 


  return (
    <> 
    <Container maxW='550%' mt="15px" >
    <Box className="row7th_img" >
    <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/Tools_BrushesDesktop.jpg" alt="makeupmainImg" /> </Box>
    </Box>
    </Container>

    {/* side section of liks */}
    <Container spacing="70px" maxW="250px"  ml="-1px" mt="20px">
  
  <div className="dropdown">
  <button className="dropbtn">FACE</button>
  <div className="dropdown-content">
  <a href="/foundation">Foundation</a>
  <a href="#">BB & CC Cream</a>
  <a href="#">Concellere</a>
  <a href="#">Face Primer</a>
  <a href="#">Highlighter</a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">CHEEK</button>
  <div class="dropdown-content">
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


    <Box className='makeupBox' overflow="hidden"  width="70%" ml="320px" mt="-190px" minChildWidth="200px" spacing="20px">
        {
        makeup &&
          makeup.map((elem , index) => (
            <Stack key={index}>
              <Box >
              {/* onClick={handleModalComp} */}
                <Img src={elem.prod_img} />
                <Text color = "rgb(213, 0, 50)" fontWeight="700" fontSize="13px" > {elem.mode} </Text>
                <Text fontWeight="750" fontSize="14px" > {elem.brand} </Text>
                <Text > {elem.name} </Text>
                <Text> {`Rs ${elem.price}`} </Text>
                <Text> {elem.offer} </Text>
              </Box>
            </Stack>
          ))}
        {/* <ModalComponent isOpen={isModalOpen} setIsOpe={setIsModalOpen} /> */}
      </Box>
 
    </>
  )
}

export default ToolAndBrushes