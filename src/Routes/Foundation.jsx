import { Box, Container, Image , SimpleGrid, Text , Stack , Img, Spacer, FormLabel, FormControl , Select, Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
 
function Foundation() {
const [foundation , setFoundation] = useState([])
const [brandSort, setBrandSort] = useState("ASC");
 const [price , setPriceSort] = useState("ASC")
// const [discount , setDiscount] = useState(foundation)
  useEffect(() =>{
  fetch(`https://database-pravin.herokuapp.com/foundation?_sort=brandSort&_order=${brandSort}`).then((res) => res.json())
  .then((res) =>{
    // console.log(res)
    setFoundation(res)
  }).catch((err)=>{
    console.log(err)
  })
  },[brandSort])

 
  const handleDicount = (dis) =>{
    const result = foundation.filter((currData)=>{
         return currData.mode === dis;
    })
    setFoundation(result)
  }


  const handlePriceRange = (pri) =>{
    // console.log(pri)
    const priresult = foundation.filter((curr)=>{
        if(pri === 2999){
            return curr.price < pri
        }
       else if(pri === 4500){
            return curr.price > pri
        }
        else if(pri === 3000){
            return (curr.price > pri && curr.price < 3499  )
        }
        else if(pri === 3500){
            return (curr.price > pri && curr.price < 4499  )
        } 
    })
    setFoundation(priresult)
  }

  

  return (
    <> 

<div className="dropdowninFoundationPage">
  <button className="dropbtninFoundationPage">Sort</button>
  <div className="dropdown-content">
  <button onClick={() => handleDicount("DISCOUNT")}> Discount</button>
  <br />
  <button onClick={() => setBrandSort("ASC")}>Brand in Ascending</button>
  <br />
  <button onClick={() => setBrandSort("DESC")}>Brand in Descending</button>
  </div>
</div>

 

<div className="dropdowninFoundationPageLeft">
 <p style={{fontWeight : "bold" , marginLeft:"15px" }} >FILTER BY</p> 
  <button className="dropbtninFoundationPageLeft">Price</button>
  <div className="dropdown-content">
      <button onClick={() => handlePriceRange(2999)}> Price below Rs.2999 </button>
        <br />
        <button onClick={() => handlePriceRange(4500)}>Price above Rs.4500</button>
         <br />
        <button onClick={() => handlePriceRange(3000)}> Price bet 3000 - 3499 </button>
        <br />
        <button onClick={() => handlePriceRange(3500)}> Price bet 3500 - 4499</button>
  </div>
</div>

<br />

<div className="dropdowninFoundationPageLeft">
 <button className="dropbtninFoundationPageLeft">SIZE</button>
  <div className="dropdown-content">
     <button onClick={() => handlePriceRange(2999)}> 10 ML (11)</button>
        <br />
        <button onClick={() => handlePriceRange(4500)}>10 GM (4)</button>
         <br />
        <button onClick={() => handlePriceRange(3000)}> 11 GM (47)</button>
        <br />
        <button onClick={() => handlePriceRange(3500)}> 12.5 GM (16) </button>
  </div>
</div>
<br />
<div className="dropdowninFoundationPageLeft">
  
  <button className="dropbtninFoundationPageLeft">COLOR</button>
  <div className="dropdown-content">
     
  <button onClick={() => handlePriceRange(2999)}> Beige </button>
        <br />
        <button onClick={() => handlePriceRange(4500)}>Brown</button>
         <br />
        <button onClick={() => handlePriceRange(3000)}> No Color </button>
        <br />
        <button onClick={() => handlePriceRange(3500)}>Pink</button>
  </div>
</div>
<br />
<div className="dropdowninFoundationPageLeft">
  <button className="dropbtninFoundationPageLeft">PROMOTION</button>
  <div className="dropdown-content">
      <button onClick={() => handlePriceRange(2999)}> Price below Rs.2999 </button>
        <br />
        <button onClick={() => handlePriceRange(4500)}>Price above Rs.4500</button>
         <br />
        <button onClick={() => handlePriceRange(3000)}> Price bet 3000 - 3499 </button>
        <br />
        <button onClick={() => handlePriceRange(3500)}> Price bet 3500 - 4499</button>
  </div>
</div>
<br />
<div className="dropdowninFoundationPageLeft">
  <button className="dropbtninFoundationPageLeft">STORE</button>
  <div className="dropdown-content">
      <button onClick={() => handlePriceRange(2999)}> Price below Rs.2999 </button>
        <br />
        <button onClick={() => handlePriceRange(4500)}>Price above Rs.4500</button>
         <br />
        <button onClick={() => handlePriceRange(3000)}> Price bet 3000 - 3499 </button>
        <br />
        <button onClick={() => handlePriceRange(3500)}> Price bet 3500 - 4499</button>
  </div>
</div>
<br />
<div className="dropdowninFoundationPageLeft">
  <button className="dropbtninFoundationPageLeft">FINISH</button>
  <div className="dropdown-content">
      <button onClick={() => handlePriceRange(2999)}> Price below Rs.2999 </button>
        <br />
        <button onClick={() => handlePriceRange(4500)}>Price above Rs.4500</button>
         <br />
        <button onClick={() => handlePriceRange(3000)}> Price bet 3000 - 3499 </button>
        <br />
        <button onClick={() => handlePriceRange(3500)}> Price bet 3500 - 4499</button>
  </div>
</div>
<br />
<div className="dropdowninFoundationPageLeft">
  <button className="dropbtninFoundationPageLeft">SKIN TYPE</button>
  <div className="dropdown-content">
      <button onClick={() => handlePriceRange(2999)}> Price below Rs.2999 </button>
        <br />
        <button onClick={() => handlePriceRange(4500)}>Price above Rs.4500</button>
         <br />
        <button onClick={() => handlePriceRange(3000)}> Price bet 3000 - 3499 </button>
        <br />
        <button onClick={() => handlePriceRange(3500)}> Price bet 3500 - 4499</button>
  </div>
</div>
<br />
<div className="dropdowninFoundationPageLeft">
  <button className="dropbtninFoundationPageLeft">FORMULATION</button>
  <div className="dropdown-content">
      <button onClick={() => handlePriceRange(2999)}> Price below Rs.2999 </button>
        <br />
        <button onClick={() => handlePriceRange(4500)}>Price above Rs.4500</button>
         <br />
        <button onClick={() => handlePriceRange(3000)}> Price bet 3000 - 3499 </button>
        <br />
        <button onClick={() => handlePriceRange(3500)}> Price bet 3500 - 4499</button>
  </div>
</div>
  
 
   
        
 <SimpleGrid   minChildWidth="250px" spacing="20px"  width="70%" ml="320px" mt="-400px">
        {foundation &&
          foundation.map((elem , index) => (
            <Stack textAlign="center"  key={index}>
              <Box>
              <Img src={elem.prod_img} />
              <Text color = "green" fontWeight="700" fontSize="13px" > {elem.mode} </Text>
               <Text fontWeight="750" fontSize="14px" > {elem.brand} </Text>
                <Text > {elem.name} </Text>
                <Text> {`Rs ${elem.price}`} </Text>
                <Text> {elem.offer} </Text>
                {/* <Button width="150px" height="30px" color="skyblue" >Cart</Button> */}
              </Box>
            </Stack>
          ))}
       
      </SimpleGrid>
    </>
  )
}

export default Foundation