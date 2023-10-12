import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    useToast
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
async function getData(category , id) {
    let res = await fetch(`https://sephoradatabse.onrender.com/${category}/${id}`)
    console.log(res);
    let data = await res.json()
    return data
    console.log(data);
}

async function getCartData() {
  let res = await fetch(`https://sephoradatabse.onrender.com/cartdata`)
  console.log(res);
  let data = await res.json()
  return data
  // console.log(data);
}

   function SingleProduct() {
    const [data , setData] = useState({})
    // const[addCount , setAddCount] = useState(null)
    const[ cartData , setCartData] = useState([])
    // const {cate , id} = useParams()
    const { category, id } = useParams();
    console.log(category , id , "+++11+++")
    const toast = useToast()
    const navigate = useNavigate()
// console.log(data.currentSku.badgeAltText);

    console.log(id)

    useEffect(() => {
        getData(category , id).then((res) => {
            console.log(res)
            setData(res)
        })
    },[])

    useEffect(() => {
      getCartData().then((res) => {
        console.log(res)
        setCartData(res)
    })
    },[])

    const handlePost = () => {
      if(cartData.includes(cartData.id)){
        toast({
          title: 'Aredy exist',
          description: "We've created your account for you.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate("/makeup") 
      }else{
        axios.post("https://sephoradatabse.onrender.com/cartdata",{
          ...data , 
          _id : Date.now(),
          count : 1
        })
        toast({
          title: 'Suceess',
          description: "Item Added to Cart",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      //  setAddCount((count) => count+1)
      }
     
    }

    //  useEffect(()=>{
    //   setAddCount(null)
    //  },[id])

    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
            //   rounded={'md'}
              alt={'product image'}
              src={
                 data.heroImage
              }
              fit={'cover'}
              align={'center'}
            //   w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {data.brandName}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                 {/* ${data.currentSku.listPrice} USD   */}
                 {`$ ${data.price} USD`} 
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 {data.displayName}
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Long Lasting</ListItem>
                    <ListItem>Certified Brand</ListItem>{' '}
                    <ListItem>Skin Friendly</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑Dusting</ListItem>
                    <ListItem>Environment Friendly</ListItem>
                    <ListItem>Easy to Use</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    ProductId:
                    </Text>{' '}
                    {data.productId}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Rating:
                    </Text>{' '}
                    {data.rating}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Reviews:
                    </Text>{' '}
                    {data.reviews}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Skin Type:
                    </Text>{' '}
                    All 
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
            onClick={handlePost}
            //  disabled={addCount === 1}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }

  export default SingleProduct