import { Image, HStack, Box, Input, Button, Container, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import BaselineCardTravel from "react-md-icon/dist/BaselineCardTravel"

import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      {/* 2nd row */}
      <Box
        width="100%"
        display="flex"
        padding={{ base: "0px 5px 0px 5px", md: "0px 20px 0px 20px" }}
        justifyContent={{ base: "space-between", md: "space-evenly" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box margin="auto" >
          <Link to="/">
            <Image
              src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png"
              alt="nameOFweb"  
              height="100px" />
          </Link>
        </Box>
        <Link to="cart" >
          <Text mt={{ base: "10px", md: "35px" }} display="flex" gap="10px"  ><BaselineCardTravel style={{ fontSize: "1.2em", color: "#f39", marginTop: "4px" }} />Cart</Text>
        </Link>
      </Box>

      {/* 3rd row */}
      <Box
        display="Flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        border="2px solid black"
        backgroundColor="black"
        mb="1%"
      >
        <Link to="sale" className="navCategotybtn" > SALE </Link>
        <Link to="makeup" className="navCategotybtn" > MAKEUP </Link>
        <Link to="skincare" className="navCategotybtn" > SKINCARE </Link>
        <Link to="fragrance" className="navCategotybtn" > FRAGRANCE </Link>
        <Link to="hairCare" className="navCategotybtn" >HAIRECARE </Link>
        <Link to="toolAndBrushes" className="navCategotybtn" > TOOL & BRUSHES </Link>
        <Link to="brand" className="navCategotybtn" > BRANDS </Link>
      </Box>
    </>
  );
}

export default Navbar;