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
      {/* navbar start */}

      <HStack
        // border="2px solid black"
        width="100%"
        spacing="80px"
        height="50px"
      >
        <Box marginLeft="9px" >
          <Image
            width="190px"
            height="45px"
            
            src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
            alt="logo"
          />
        </Box>
        {/* <Box>
          <Link to=""> Store Locator</Link>
        </Box> */}

        <Box width="270px" >
             <Link to="" display="flex" ><BaselineLocationOn style={{fontSize: "1.2em",color: "#f39"   , marginTop:"4px" }}/>
             Store Locator
             </Link>
         </Box>

        <Box width="800px"
      //  border="1px solid red"
        flexWrap="wrap"
        textAlign="center" 
        >
          <Link to=""  display="flex" > <OutlineStar style={{fontSize: "1.2em",color: "#704280" ,  marginTop:"12px" }} ></OutlineStar>
          <OutlineStar style={{fontSize: "1.2em",color: "#ffc001" , marginTop:"12px"  }} ></OutlineStar>
          <OutlineStar style={{fontSize: "1.2em",color: "#ec008c" , marginTop:"12px" }} ></OutlineStar>
            Get 10% OFF on your first purchase. Use Code: BEAUTY10
            <OutlineStar style={{fontSize: "1.2em",color: "#704280" , marginTop:"12px" }} ></OutlineStar>
            <OutlineStar style={{fontSize: "1.2em",color: "#ffc001" , marginTop:"12px" }} ></OutlineStar>
            <OutlineStar style={{fontSize: "1.2em",color: "#ec008c" , marginTop:"12px" }} ></OutlineStar>
          </Link>
        </Box>

        <Box
          width="600px"
      //  border="1px solid red"
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >

         <Box width="100px" >
             <Link to="" display="flex" fontWeight="400"  ><BaselineGetApp style={{fontSize: "1.2em",color: "#f39" ,  marginTop:"4px" }}/>
             Get APP
             </Link>
         </Box>

         <Box width="100px" >
             <Link to="" display="flex"   fontWeight="400" ><BaselineArtTrack style={{fontSize: "1.2em",color: "#f39" ,marginTop:"4px"   }}/>
             Track
             </Link>
         </Box>

         <Box width="100px" >
             <Link to="" display="flex"   fontWeight="400"  ><OutlineLoyalty style={{fontSize: "1.2em",color: "#f39" ,  marginTop:"4px" }}/>
            Loyalty
             </Link>
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
