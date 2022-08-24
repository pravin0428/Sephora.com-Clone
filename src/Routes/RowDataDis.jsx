import { border, Box , Image , Text} from '@chakra-ui/react'
import React from 'react'

function RowDataDis({img , brand , title , tag , price , id}) {
  return (
    
    <div  className='pro11'>
    
     <div style={{ width:"210px"  }} >
        <div><img  className='pro11image' src={img} /></div>
           <div style={{ textAlign:"center" }} >
           <h5> {tag} </h5>
            <p>{brand}</p>
            <h5>{title}</h5>
            <h5>{price}</h5>
            </div>  
            
     </div>

    </div>    
         
    
  )
}

export default RowDataDis