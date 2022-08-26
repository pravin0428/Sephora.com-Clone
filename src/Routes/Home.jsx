import React from 'react'
import { Link ,  Image, HStack, Box, Input, Button, Container, Stack, Heading , Text} from "@chakra-ui/react";
import RowDataDis from './RowDataDis';
import Video from './Video';
import { useEffect } from "react";
import { useState } from "react";
import Slideshow from './MySlidShow';

 

function Home() {

    const[dataof11row , setDataof11row] = useState([])

    useEffect(()=>{
     fetch("https://database-pravin.herokuapp.com/projectRow11").then((res)=> res.json())
     .then((res) => {
         console.log(res)
         setDataof11row(res)
     })
    },[]) 

  return (
    <>
  {/* <Slideshow/>  */}
  <Slideshow/> 

 {/* fifth row */}

 <Box className="row5ht_box" >
    <button className="back_btn" >STEALS & DEALS</button>
    <button className="back_btn" >BEAUTY MINIS UNDER ₹999 </button>
    <button className="back_btn" >EVERYDAY ESSENCIAL</button>
    <button className="back_btn" >TRENDING NOW</button>
    <button className="back_btn" >EDITORS PICKS</button>
    <button className="back_btn" >TOP FREGRANCES</button>
 </Box>
  
  {/* 6th row */}
  <Heading textAlign="center" mt="30px" mb="15px" >Brand Of The Week</Heading>
   <Container maxW='550%' mb="20px" mg="10px" >
    <Stack>
        <Image src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/ForestEssential_TopBanner_Brandoftheweekdesktop.jpg" />
    </Stack>
   </Container>

{/* 7th row */}
<Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Bestsellers.jpg" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Bodycare.jpg" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Facial.jpg" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Makeup.jpg" /> </Box>
   </Box>
   </Container>

{/* 8th row */}
   <Stack mt="50px" >
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg" />
   </Stack>
    
  <Box border="2px solid black" width="100%" display="flex" justifyContent="space-between" >
  <Box  border="2px solid red" display="flex" width="50%"  >

   <Box textAlign="center" ><Image className="modal_img" src="https://cdn16.nnnow.com/web-images/medium/styles/7C1N04O5PPK/1655201666947/1.jpg" />
   <Text fontWeight="700" fontSize="14px" >HUDA BEAUTY</Text>
   <p>Easy Bake Loose Setting Powder Mini-Banana Bread</p>
   <h5>Rs 1,650</h5>
   </Box>  
   <Box textAlign="center" ><Image className="modal_img" src="https://cdn08.nnnow.com/web-images/medium/styles/2PZJ62MD2SN/1655201666969/1.jpg" />
   <Text fontWeight="700" fontSize="14px" >HUDA BEAUTY</Text>
   <p >Easy Bake Loose Setting Powder Mini-Banana Bread</p>
   <h5>Rs 1,650</h5>
   </Box>  
   <Box textAlign="center" ><Image className="modal_img" src="https://cdn04.nnnow.com/web-images/medium/styles/G1IEBAOC0JO/1657865337810/1.jpg" />
   <Text fontWeight="700" fontSize="14px" >HUDA BEAUTY</Text>
   <p  >Easy Bake Loose Setting Powder Mini-Banana Bread</p>
   <h5>Rs 1,650</h5>
   </Box>  
  </Box>

  {/* video */}
  <Box border="2px solid purple" width="50%">
    <Video/>
  </Box>
  </Box>  

{/* 9th row */}
<Stack mt="50px" textAlign="center" >
    <Text fontSize="40px" text-spacing="10px" >Lazy Girl's BFFs</Text>
   </Stack>

   <Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_ContentP-Story_CreamyConcealers.jpg" alt="img9" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_ContentP-Story_MagicalMascaras.jpg" alt="img9" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_ContentP-Story_TrendingTints.jpg" alt="img9" /> </Box>
    
   </Box>
   </Container>

   {/* 10 row */}
   <Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="	https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg" alt="img9" /> </Box>
   </Box>
   </Container>

   {/* 11 row */}
   {/* https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_3_DESK.jpg */}
   <Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_3_DESK.jpg" alt="img10" /> </Box>
   </Box>
   </Container>

 <Box mt="20px" > 
    {dataof11row.map((elem)=>(
        <RowDataDis key={elem.id} 
        img={elem.img}
        brand={elem.brand}
        title={elem.title}
        tag = {elem.tag}
        price = {elem.price}
        id={elem.price}
         />
    ))}
 </Box>

 {/* 12row */}
  
 <Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg" alt="img10" /> </Box>
   </Box>
   </Container>

   <Box className="row12ht_box" >
    <Link  ><Image width="150px" src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg" /></Link>
    <Link  > <Image width="150px" src="	https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg" /> </Link>
    <Link  > <Image width="150px" src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg" /> </Link>
    <Link  > <Image width="150px" src="https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg" /> </Link>
    <Link  > <Image width="150px" src="https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg" /> </Link>
    <Link  > <Image width="150px" src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg" /> </Link>
 </Box>

{/* row 13 */}
{/* new one block */}

<Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_5_DESK.jpg" alt="tag13" /> </Box>
   </Box>
   </Container>

{/* 1st in 13 */}

 <Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg" alt="img13" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_OutrageousPlumpLipgloss.jpg" alt="img13" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/14-june-2022/se/MUFE_NOTB_Ultrasettingpowderlaunch.jpg" alt="img13" /> </Box>
    
   </Box>
   </Container>

{/* 2nd in 13 */}

<Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/25-july-2022/ABH_NOTB_LIpstickandLipLiner.jpg" alt="img13" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/18-aug-2022/Guerlain_NOTB_Sunkissedpowder2.jpg" alt="img13" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/28-june-2022/Givenchy_NOTB.jpg" alt="img13" /> </Box>
    
   </Box>
   </Container>

   {/* 14 row */}

   <Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_7_DESK.jpg" alt="tag13" /> </Box>
   </Box>
   </Container>

   <Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg" alt="img13" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg" alt="img13" /> </Box>
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg" alt="img13" /> </Box>
    
   </Box>
   </Container>

    </>
  )
}

export default Home