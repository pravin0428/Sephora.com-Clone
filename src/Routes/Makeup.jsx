import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Text,
  Stack,
  Img,
  Button,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Skeleton,
} from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "../Components/Cards";
import SingleProduct from "./SingleProduct";
function Makeup() {
  const [makeup, setMakeup] = useState([]);
  const [filteredMakeup, setFilteredMakeup] = useState([]);
  const [sortorder, setSortOrder] = useState("");

  console.log(sortorder);
  const [loading, setLoading] = useState(false);

  const handleClickF = () => {
    console.log(filteredMakeup, ">><<<<");
    const result = filteredMakeup.filter((currData) => {
      return currData.cat === "foundation";
    });
    setMakeup(result);
  };

  const handleClickS = () => {
    const result = filteredMakeup.filter((currData) => {
      return currData.cat === "ss";
    });
    setMakeup(result);
  };

  //  blush

  const handleClickB = () => {
    const result = filteredMakeup.filter((currData) => {
      return currData.cat === "blush";
    });
    setMakeup(result);
  };

  const handleClickAS = () => {
    const result = filteredMakeup.filter((currData) => {
      return currData.cat === "eyeshadow";
    });
    setMakeup(result);
  };
  const handleClickHL = () => {
    const result = filteredMakeup.filter((currData) => {
      return currData.cat === "ckeekhighlighter";
    });
    setMakeup(result);
  };

  const handleClickLS = () => {
    const result = filteredMakeup.filter((currData) => {
      return currData.cat === "lip";
    });
    setMakeup(result);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://sephoradatabse.onrender.com/makeup?_sort=moreColors&_order=${sortorder}`
    )
      .then((res) => res.json())
      //   fetch(`https://database-pravin.herokuapp.com/makeup`).then((res) => res.json())
      .then((res) => {
        //  console.log(res)
        setMakeup(res);
        setFilteredMakeup(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [sortorder]);

  return (
    <>
      <Container maxW="550%" mt="15px" mb="15px">
        <Box className="row7th_img">
          <Box>
            {" "}
            <Image
              src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg"
              alt="makeupmainImg"
            />{" "}
          </Box>
        </Box>
      </Container>

      {/* side section of liks */}

      <Box
        width="100%"
        // border="3px solid green"
        display={{ base: "inline-block", sm: "flex" }}
        justifyContent="space-around"
      >
        <Container
          spacing="70px"
          width={{ base: "100%", sm: "32%", md: "32%", lg: "32%" }}
          ml="-1px"
          mt="20px"
          // border="2px solid green"
          margin={{ base: "auto", sm: 0, md: 0, lg: 0 }}
          // display={{base : "flex" , sm : "inline-block" , md : "inline-block", lg : "inline-block"}}
        >
          <div className="dropdown">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      FACE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text as="button" p={2} onClick={handleClickF}>
                    {" "}
                    Foundation{" "}
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    BB & CC Cream{" "}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            
          </div>

          <div className="dropdown">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      CHEEK
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text as="button" p={2} onClick={handleClickB}>
                    {" "}
                    Blush{" "}
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickHL}>
                    {" "}
                    Hightlighter{" "}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="dropdown">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      EYE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text as="button" p={2} onClick={handleClickAS}>
                    Eyeshadow
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickAS}>
                    Eyeliner
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="dropdown">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      LIP
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text as="button" p={2} onClick={handleClickLS}>
                    {" "}
                    LipStiks{" "}
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickF}>
                    {" "}
                    Foundation{" "}
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    BB & CC Cream{" "}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="dropdown">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      BRUSH AND APPLICATORS
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text as="button" p={2} onClick={handleClickF}>
                    {" "}
                    Foundation{" "}
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    BB & CC Cream{" "}
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Concellere
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Face Primer
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Highlighter
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="dropdown">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      ACCESSORIES
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text as="button" p={2} onClick={handleClickF}>
                    {" "}
                    Foundation{" "}
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    BB & CC Cream{" "}
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Concellere
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Face Primer
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Highlighter
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="dropdown">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      NAIL
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text as="button" p={2} onClick={handleClickF}>
                    {" "}
                    Foundation{" "}
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    BB & CC Cream{" "}
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Concellere
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Face Primer
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Highlighter
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="dropdown">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      MAKEUP PALETTE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text as="button" p={2} onClick={handleClickF}>
                    {" "}
                    Foundation{" "}
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    BB & CC Cream{" "}
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Concellere
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Face Primer
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Highlighter
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="dropdown">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      VEGAN
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text as="button" p={2} onClick={handleClickF}>
                    {" "}
                    Foundation{" "}
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                   
                    BB & CC Cream{" "}
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                   
                    Concellere
                  </Text>
                  <br />

                  <Text as="button" p={2} onClick={handleClickS}>
                   
                    Face Primer
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={handleClickS}>
                    {" "}
                    Highlighter
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>

        <Box width="76%" margin={{ base: "auto", sm: 0, md: 0, lg: 0 }}>
          <Select
            placeholder="Sort by Price"
            value={sortorder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              // border: "2px solid black",
              // padding: "10px",
              width: "150px",
              marginLeft: "5px",
              marginBottom: "5px",
            }}
          >
            <option value="asc">Price : ASC</option>
            <option value="desc">Price : DESC</option>
          </Select>

          {loading ? (
            <Box
              marginTop="10px"
              fontWeight="bold"
              fontFamily="sans-serif"
              textAlign="center"
              fontSize="30px"
            >
             Please wait, we're fetching the latest data for you.
          <Stack>
            <Skeleton height='250px' />
            <Skeleton height='250px' />
            <Skeleton height='250px' />
          </Stack>
            </Box>
            
          ) : (
            <SimpleGrid
              // border="1px solid black"
              minChildWidth="200px"
              spacing="40px"
            >
              {makeup &&
                makeup.map((elem) => (
                  <Stack key={elem.id}>
                    <Box
                      padding="15px"
                      margin="auto"
                      textAlign="center"
                      boxShadow="md"
                      width="95%"
                    >
                      <Text> {`Brand : ${elem.brandName}`} </Text>
                      <br />
                      <Img margin="auto" src={elem.heroImage} />
                      {/* <Text overflow="hidden" > {elem.displayName} </Text> */}
                      <br />
                      <Text mb="10px"> {`$ ${elem.price}`} </Text>
                      <Link to={`/makeup/makeup/${elem.id}`}>
                       {/* ${product.type}/${product.id} */}
                       {/* <SingleProduct category="makeup" /> */}
                      <Button>Details</Button>
                      </Link>
                    </Box>
                  </Stack>
                ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Makeup;
