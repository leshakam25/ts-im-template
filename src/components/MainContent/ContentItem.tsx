import { Box, Button, CardMedia, Typography } from '@mui/material';
import React from 'react'
import {IItem} from '../../types/types'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';


interface ItemProps {
  item: IItem;
}

const font ='Oswald'

const itemStyle = {
  content:{
    width:'300px',
    height:'526px',
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
    height:'226px'
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
    border:'1px solid gray',
    opacity: 0.5
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
    opacity: 0.7
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
      <Box>
        <CardMedia component='img' src={item.img} sx={itemStyle.img}/>
        <Typography sx={itemStyle.type}>{item.type}</Typography>
        <Typography sx={itemStyle.title}>{item.title}</Typography>
      </Box>
      <Box>
      {
        item && item.maxSpeed &&
        <Typography sx={itemStyle.title}>Максимальная скорость: {item.maxSpeed}</Typography>
      }
      {
        item && item.powerReserve &&
        <Typography sx={itemStyle.title}>Запас хода: {item.powerReserve}</Typography>
      } 
      {
        item && item.made &&
        <Typography sx={itemStyle.title}>Производство: {item.made}</Typography>
      } 
      </Box>
    <Box>
      <Box  sx={itemStyle.buttons}>
          <Box>
            {
              item && item.price &&
              <Typography sx={itemStyle.price}>от {item.price} руб.</Typography>
            }
            <Typography sx={itemStyle.lastPrice}>от {item.lastPrice} руб.</Typography>
          </Box>
          <Box sx={itemStyle.buttons}>
            <Button variant='outlined' sx={itemStyle.iconGray}><FavoriteBorderIcon/></Button>
            <Button variant='outlined' sx={itemStyle.iconGray}><AlignVerticalBottomIcon/></Button>
          </Box>
        </Box>
        <Box sx={itemStyle.buttons}>
          <Button
          variant='outlined'
          sx={{
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
    </Box>
  )
}

export default ContentItem