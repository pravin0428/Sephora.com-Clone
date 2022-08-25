import { Box, Container, Image , SimpleGrid, Text , Stack , Img, Spacer, FormLabel, FormControl , Select} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Makeup() {
const [makeup , setMakeup] = useState([])
  useEffect(() =>{
  fetch(`https://database-pravin.herokuapp.com/makeup`).then((res) => res.json())
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
    <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg" alt="makeupmainImg" /> </Box>
    </Box>
    </Container>

    {/* side section of liks */}
    <Container spacing="70px" maxW="250px" ml="-1px" mt="20px" border="1px solid red"  >
    
 
  {/* <FormLabel>Country</FormLabel> */}
  <select className='se' contenteditable="true" >
    <option><li>FACE</li></option>
    <option><li>Foundation</li></option>
    <option>BB & CC Cream</option>
    <option>Concellere</option>
    <option>Face Primer</option>
    <option>Highlighter</option>
  </select>
 

    {/* <Text>SHOPE</Text>
    <Text>FACE</Text>
    <Text>CHEECK</Text>
    <Text>EYE</Text>
    <Text>BRUSH AND APPLICATORS</Text>
    <Text>ACCESSORIES</Text>
    <Text>NAIL</Text>
    <Text>MAKEUP PALETTES</Text>
    <Text>VEGEN</Text> */}
    </Container>


    <Box className='makeupBox' overflow="hidden" border="1px solid black" width="70%" ml="320px" mt="-60px" minChildWidth="200px" spacing="20px">
        {
        makeup &&
          makeup.map((elem) => (
            <Stack key={elem.id}>
              <Box >
              {/* onClick={handleModalComp} */}
                <Img src={elem.prod_img} />
                <Text> {elem.mode} </Text>
                <Text> {elem.brand} </Text>
                <Text> {elem.name} </Text>
                <Text> {elem.price} </Text>
                <Text> {elem.offer} </Text>
              </Box>
            </Stack>
          ))}
        {/* <ModalComponent isOpen={isModalOpen} setIsOpe={setIsModalOpen} /> */}
      </Box>
 
    </>
  )
}

export default Makeup