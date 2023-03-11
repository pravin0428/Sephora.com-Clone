 import {Link} from "react-router-dom"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import BaselineLocationOn from "react-md-icon/dist/BaselineLocationOn";
import OutlineStar from "react-md-icon/dist/OutlineStar";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("#35383d", "#35383d")}
        px={4}
        bgPos={"center"}
        bgSize="cover"
        pos="fixed"
        w="100%"
        zIndex={1}
        color="#f0d122"
        // borderBottom="1px solid white"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"90%"}
          margin="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link
                to="/"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
                // activeClass={styles.active}
              >
        <Box >
          <Image
            width="100px"
            height="45px"
            
            src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
            alt="logo"
          />
        </Box>
    </Link>
     </Box>
            <HStack
              as={"nav"}
              spacing={5}
              display={{ base: "none", sm:"none" , md: "flex" , lg:"flex" }}
           
               
             
            >
              <Link
                   border="2px solid black"
                to="about"
                smooth={true}
                duration={1000}
                //  activeClass={styles.active}
                
                spy={true}
                hashSpy={true}
                 display="flex"
              > <Box display="flex" ><BaselineLocationOn style={{fontSize: "1.2em",color: "#f39"   , marginTop:"4px" }}/>
              Store Locator</Box>
            
              </Link>

            
      
            

               <Link
                to="contact"
                smooth={true}
                duration={1000}
                // activeClass={styles.active}
              
                spy={true}
                hashSpy={true}
              >
        
        <Box width="800px"
        // border="1px solid red"
        flexWrap="wrap"
        textAlign="center" 
        display="flex" 
        justifyContent="center"
        ml={-12}
        >
            <Box display="flex"  
            //  border="1px solid green"
              > <OutlineStar style={{fontSize: "1.2em",color: "#704280" , marginTop:"12px" }} ></OutlineStar>
            <OutlineStar style={{fontSize: "1.2em",color: "#ffc001" , marginTop:"12px" }} ></OutlineStar>
            <OutlineStar style={{fontSize: "1.2em",color: "#ec008c" , marginTop:"12px" }} ></OutlineStar></Box>
          <Box 
          // border="1px solid yellow"
           p={2} >Get 10% OFF on your first purchase. Use Code: BEAUTY10</Box>
         <Box display="flex"   
        //  border="1px solid green"
          > <OutlineStar style={{fontSize: "1.2em",color: "#704280" , marginTop:"12px" }} ></OutlineStar>
            <OutlineStar style={{fontSize: "1.2em",color: "#ffc001" , marginTop:"12px" }} ></OutlineStar>
            <OutlineStar style={{fontSize: "1.2em",color: "#ec008c" , marginTop:"12px" }} ></OutlineStar></Box>
     </Box>
</Link>

       
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} />
              </MenuButton>
              <MenuList>
                 <Link to="register"><MenuItem>Regiter</MenuItem>  </Link>
                 <MenuDivider /> 
                 <Link to="login"> <MenuItem>Login</MenuItem></Link>
               
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}

            //  border="2px solid green"
          >
            <Stack
              as={"nav"}
              spacing={4}
              //  border="3px solid yellow"
            >
              <Link
                to="sale"
               >
                <div>Sale</div>
              </Link>

              <Link
                to="makeup"
                smooth={true}
                duration={1000}
                // activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div>Makeup</div>
              </Link>

              <Link
                to="skincare"
                smooth={true}
                duration={1000}
                // activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div>Skincare</div>
              </Link>

            
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={10}></Box>
    </>
  );
}

export default Navbar;
