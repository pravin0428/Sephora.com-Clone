import { Link ,  Image, HStack, Box, Input, Button, Container, Stack, Heading , Text, border} from "@chakra-ui/react";
import { useState } from "react";
import BaselineCardTravel from "react-md-icon/dist/BaselineCardTravel" 
import BaselineFavorite from "react-md-icon/dist/BaselineFavorite" 
import BaselineAccountCircle from "react-md-icon/dist/BaselineAccountCircle";
import BaselineLocationOn from "react-md-icon/dist/BaselineLocationOn"
import BaselineGetApp from "react-md-icon/dist/BaselineGetApp"
import BaselineArtTrack from "react-md-icon/dist/BaselineArtTrack"
import OutlineLoyalty from "react-md-icon/dist/OutlineLoyalty"
import OutlineStar from "react-md-icon/dist/OutlineStar"
 
  import ModalComponent from "./ModalComp" 
 


function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalComp = () => {
    setIsModalOpen(true);
    // setModalInfo(elem);
  };

return (
    <>
   

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
             <Text display="flex"  ><BaselineFavorite style={{fontSize: "1.2em",color: "#f39" ,  marginTop:"4px" }}/>
             </Text>
         </Box>

          <Box>
             <Text display="flex" ><BaselineCardTravel style={{fontSize: "1.2em",color: "#f39" ,   marginTop:"4px" }}/></Text>
         </Box>

          <Box>
             <Text onClick={handleModalComp} display="flex"  gap="2px" ><BaselineAccountCircle style={{fontSize: "1.2em",color: "#f39" , marginTop:"4px" }}/>
              Login</Text>
          <ModalComponent isOpen={isModalOpen} setIsOpe={setIsModalOpen} />
          </Box>
        </Box>
 
     </Box>
   
   {/* 3rd row */}
        
   <Box  display="flex" justifyContent="space-evenly" >
   <Link href="/sale" className="navCategotybtn" > SALE </Link>
   <Link href="/makeup" className="navCategotybtn" > MAKEUP </Link>  
   <Link href="/skincare" className="navCategotybtn" > SKINCARE </Link>  
   <Link href="/fragrance" className="navCategotybtn" > FRAGRANCE </Link>
   <Link href="/hairCare" className="navCategotybtn" >HAIRECARE </Link>  
   <Link href="/toolAndBrushes" className="navCategotybtn" > TOOL & BRUSHES </Link>  
   <Link href="/brand" className="navCategotybtn" > BRANDS </Link>  
 
   </Box>

</>
  );
}

export default Navbar;
