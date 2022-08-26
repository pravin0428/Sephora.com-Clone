import { Link ,  Image, HStack, Box, Input, Button, Container, Stack, Heading , Text} from "@chakra-ui/react";
import { useState } from "react";
  import ModalComponent from "./ModalComp" 
 


function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalComp = () => {
    setIsModalOpen(true);
    // setModalInfo(elem);
  };

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
          <Link to=""> Store Locator</Link>
        </Box>
        <Box>
          <Link to="">
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
            <Link to="">Get App</Link>
          </Box>
          <Box>
            <Link to="">Track</Link>
          </Box>
          <Box>
            <Link to="">Loyalty</Link>
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
        <Link href="/">
        <Image src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="nameOFweb" width="223px"
            height="100px" />
        </Link>
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
            <Link to="">cart</Link>
          </Box>
          <Box>
            <Link to="x">love</Link>
          </Box>
          <Box>
            <Text onClick={handleModalComp} >Login</Text>
          <ModalComponent isOpen={isModalOpen} setIsOpe={setIsModalOpen} />
          </Box>
        </Box>
 
     </Box>
   
   {/* 3rd row */}
        
   <Box  display="flex" justifyContent="space-evenly" >
   <Link href="/sale" className="navCategotybtn" > SALE </Link>
   <Link href="/makeup" className="navCategotybtn" > MAKEUP </Link>  
   <Link href="/makeup" className="navCategotybtn" > SKINCARE </Link>  
   <Link href="/makeup" className="navCategotybtn" > FRAGRANCE </Link>
   <Link href="/makeup" className="navCategotybtn" >HAIRECARE </Link>  
   <Link href="/makeup" className="navCategotybtn" > TOOL & BRUSHES </Link>  
   <Link href="/makeup" className="navCategotybtn" > BRANDS </Link>  
 
   </Box>

</>
  );
}

export default Navbar;
