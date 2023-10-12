import { Box, Container, Img, SimpleGrid, Stack, Image } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SlideshowForSalePage from './SlideForSale';
import { Link } from 'react-router-dom';
function Sale() {
  const [sale, setSale] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://sephoradatabse.onrender.com/sale')
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setSale(res);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SlideshowForSalePage />
      <Container maxW="550%" mt="15px" >
        <Box className="row7th_img"    >
          <Box >
            <Image
              src="https://logan.nnnow.com/content/dam/nnnow-project/30-sep-2020/30SEP20_SEPHORA-OFFERPAGEZ_PREHEADER_DESK.jpg"
              alt="saleTag"
            />
          </Box>
        </Box>
      </Container>

      <SimpleGrid minChildWidth="350px" spacing="35px" padding="20px"  >
        {sale &&
          sale.map((elem) => (
            <Stack key={elem.id}>
              <Box
                p="20px" // Adjust padding
                border="1px solid #ccc" // Add a border
                borderRadius="8px" // Add border radius
                boxShadow="md" // Add a shadow
              >
                 <Link to="/makeup" ><Img src={elem.img} maxW="100%" alt={elem.name} /></Link>
              </Box>
            </Stack>
          ))}
      </SimpleGrid>
    </>
  );
}

export default Sale;
