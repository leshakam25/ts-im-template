import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react'
import {IItem} from '../../types/types'
import BasketButton from '../Buttons/ItemButtons/BasketButton';
import OneClickButton from '../Buttons/ItemButtons/OneClickButton';

interface ItemProps {
  item: IItem;
}

const font ='Oswald'

const itemStyle = {
  content:{
    width:'326px',
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
      <Box>
        <Typography sx={itemStyle.price}>{item.price}</Typography>
        <Typography sx={itemStyle.lastPrice}>{item.lastPrice}</Typography>
        <Typography sx={itemStyle.discount}>{item.discount}</Typography>
      </Box>
      <Box sx={itemStyle.buttons}>
        <OneClickButton/>
        <BasketButton/>
      </Box>
    </Box>
  )
}

export default ContentItem