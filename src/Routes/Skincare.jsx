import {
  Box,
  Container,
  Image,
  Grid,
  Button,
  GridItem,
  SimpleGrid,
  Text,
  Stack,
  Img,
  FormControl,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Skincare() {
  const [makeup, setMakeup] = useState([]);
  const [filteredMakeup, setFilteredMakeup] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetch(`https://sephoradatabse.onrender.com/skinCare`)
      .then((res) => res.json())
      .then((res) => {
        setMakeup(res);
        setFilteredMakeup(res); // Initialize filteredMakeup with the full data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    const filteredData = makeup.filter((item) => item.cat === selectedCategory);
    setFilteredMakeup(filteredData); // Update the filteredMakeup state
  }

  useEffect(() => {
    if (category !== '') {
      handleCategorySelect(category);
    }
  }, [category]);

  return (
    <Container maxW="100%" mt="15px">
      <Grid templateColumns={['1fr', '1fr 3fr']} gap={6}>
        <GridItem colSpan={[1, 1, 1, 1]}>
          {/* Filter section on the left */}
          <Container
            spacing={['5px', '10px', '20px', '70px']}
            maxW={['100%', '100%', '100%', '250px']}
            mt={['10px', '15px', '15px', '20px']}
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
                  <Text as="button" p={2} onClick={() => handleCategorySelect('Face Mask')} >
                    {" "}
                    Face Mask 
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={() => handleCategorySelect('Serum')} >
                    {" "}
                    Serum 
                  </Text>
                  <br />
                  <Text as="button" p={2} onClick={() => handleCategorySelect('Eye Balm')} >
                    {" "}
                    Eye Balm 
                  </Text>
                  <br />
                   
                  <Text as="button" p={2}  onClick={() => handleCategorySelect('Nose Strip')}>
                   Nose Strip
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            </div>
          </Container>
        </GridItem>
        <GridItem colSpan={[1, 1, 1, 1]}>
          <SimpleGrid minChildWidth="200px" spacing="40px">
          {filteredMakeup.map((elem) => (
        <Stack key={elem.id}>
          <Box
            padding="15px"
            margin="auto"
            textAlign="center"
            boxShadow="md"
            width="95%"
          >
            <Text>{`Brand: ${elem.brandName}`}</Text>
            <br />
            <Img margin="auto" src={elem.heroImage} />
            <br />
            <Text mb="10px">{`$ ${elem.price}`}</Text>
            <Link to={`/skincare/skincare/${elem.id}`}>
              <Button>Details</Button>
            </Link>
          </Box>
        </Stack>
      ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Skincare;