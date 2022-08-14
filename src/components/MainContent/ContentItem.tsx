import { Box, Button, CardMedia, Typography } from '@mui/material';
import React from 'react'
import {IItem} from '../../types/types'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


interface ItemProps {
  item: IItem;
}

const font ='Oswald'

const itemStyle = {
  content:{
    width:'300px',
    height:'596px',
    border: '1px solid lightgray',
    borderRadius:'4px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'left',
    p:'20px',
    m:'10px'
   
  },
  title:{
    fontFamily:'Oswald',
    fontSize:'20px'

  },
  img:{
    width:'286px',
    height:'224px'
  },
  icon:{
    height:'48px',
    width:'48px',
    m:'4px'
  },
  iconGray:{
    height:'48px',
    width:'48px',
    m:'4px',
    color:'gray',
  },
  buttons:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  },
  type:{
    fontFamily:`${font}`,
    color:'#838688',
    fontSize:'16px'
  },
  rate:{
    fontFamily:`${font}`,
  },
  price:{
    fontFamily:`${font}`,
    textDecorationLine: 'line-through',
    color: '#838688',
  },
  lastPrice:{
    fontFamily:`${font}`,
    fontSize:'24px'

  },
  discount:{
    fontFamily:`${font}`,
    fontWeight: "400",
    fontSize: "14px",
  }
}

const ContentItem: React.FC<ItemProps> = ({item}) => {
  return (
    <Box
    sx={itemStyle.content}>
      <CardMedia component='img' src={item.img} sx={itemStyle.img}/>
      <Typography sx={itemStyle.type}>{item.type}</Typography>
      <Typography sx={itemStyle.title}>{item.title}</Typography>
      <Typography sx={itemStyle.rate}>{item.rate}</Typography>
      <Box  sx={itemStyle.buttons}>
        <Box>
          <Typography sx={itemStyle.price}>{item.price}</Typography>
          <Typography sx={itemStyle.lastPrice}>{item.lastPrice}</Typography>
          <Typography sx={itemStyle.discount}>{item.discount}</Typography>
        </Box>
        <Box sx={itemStyle.buttons}>
          <Button variant='outlined' sx={itemStyle.iconGray}>a</Button>
          <Button variant='outlined' sx={itemStyle.iconGray}>d</Button>
        </Box>
      </Box>
    
        <Box sx={itemStyle.buttons}>
        <Button variant='outlined' sx={{
      height: '48px',
      width: '228px',
      borderRadius: '4px',
      padding: '10px',

   }}>
      <Typography
      sx={{
      fontFamily:'oswald',
      fontSize:'16px'
   }}>
         КУПИТЬ В 1 КЛИК
      </Typography>
   </Button>
   <Button variant='contained' sx={{height:'48px',width:'48px'}}>
      <AddShoppingCartIcon fontSize='medium' sx={{color:'white'}} />
    </Button>
    </Box>
    </Box>
  )
}

export default ContentItem