import { CardMedia, MenuItem, Typography } from '@mui/material';
import React from 'react'
import { ICatalogButtonItem } from '../../../types/types';


interface CatalogButtonItemProps {
  item:ICatalogButtonItem;   
}

const CatalogButtonItem: React.FC<CatalogButtonItemProps>  = ({item}) => {
  return (
        <MenuItem key={item.id}>
          <CardMedia  component='img' src={item.img} sx={{height:'72px', width:'auto'}}/>
          <Typography sx={{pl:1, fontSize:28}}>{item.title}</Typography>
        </MenuItem>
  )
}

export default CatalogButtonItem