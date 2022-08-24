import { Image, HStack, Box, Link, Icon, Input, Button, Container, Stack } from "@chakra-ui/react";
 
import React from "react";

let arrOFMainImage = [
    {
      img : "https://logan.nnnow.com/content/dam/nnnow-project/30-june-2022/se/SC_Topbanner_ExclusivelyatSephoradesktop.jpg"
    },
 
    {
        img : "https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colormobile.jpg"
      },
      {
        img : "https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/ABH_Homepagebannermobile(1).jpg"
      },
      {
        img : "https://logan.nnnow.com/content/dam/nnnow-project/09-aug-2022/se/Esteelauder_Homepagebannerdesktop.jpg"
      },
  
      {
        img : "https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Clarins_Topbannermobile.jpg"
      },
      {
       img : "https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg"
      },
      {
        img : "https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_HomepageBannermobile.jpg"
      }
       
]


function Navbar() {



  return (
    <>
      {/* navbar start */}

      <HStack
        // border="2px solid black"
        width="100%"
        spacing="80px"
        height="50px"
      >
        <Box>
          <Image
            width="111px"
            height="45px"
            src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
            alt="logo"
          />
        </Box>
        <Box>
          <Link to="#"> Store Locator</Link>
        </Box>
        <Box>
          <Link to="#">
            Get 10% OFF on your first purchase. Use Code: BEAUTY10
          </Link>
        </Box>

        <Box
          width="400px"
        //   border="1px solid red"
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          <Box>
            <Link to="#">Get App</Link>
          </Box>
          <Box>
            <Link to="#">Track</Link>
          </Box>
          <Box>
            <Link to="#">Loyalty</Link>
          </Box>
        </Box>
      </HStack>

    {/* 2nd row */}
      
     <Box width="100%"
        //   border="1px solid red"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap" >

       <Box marginTop="30px"  >
          <Input  placeholder="Search" type="text" width="300px"   />
        </Box>
        <Box>
          <Image src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="nameOFweb" width="223px"
            height="100px" />
        </Box>

        <Box
          width="250px"
        //   border="1px solid red"
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
         marginTop="40px"
        >
          <Box>
            <Link to="#">cart</Link>
          </Box>
          <Box>
            <Link to="#">love</Link>
          </Box>
          <Box>
            <Link to="#">Login</Link>
          </Box>
        </Box>
 
     </Box>
   
   {/* 3rd row */}
        
   <Box border="1px solid red" display="flex" justifyContent="space-evenly" >
   <Button>SALE</Button>
   <Button>MAKEUP</Button>
   <Button>SKINCARE</Button>
   <Button>FRAGRANCE</Button>
   <Button>HAIRECARE</Button>
   <Button>TOOL & BRUSHES</Button>
   <Button>BRANDS</Button>
   </Box>

 
 {/* 4rt row */}

{/* it shold be in home comp  */}

 {/* <Box > */}
     {/* {arrOFMainImage?.map((elem)=>(
     <Image src={elem.img} />
    ))} */}
   <Stack> 
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/30-june-2022/se/SC_Topbanner_ExclusivelyatSephoradesktop.jpg" />
    </Stack>
 {/* </Box> */}

 {/* fifth row */}

 <Box>
    <button>STEALS & DEALS</button>
    <button>BEAUTY MINIS UNDER ₹999 </button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
 </Box>
  
    </>
  );
}

export default Navbar;
