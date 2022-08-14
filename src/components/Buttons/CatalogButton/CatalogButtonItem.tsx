import { CardMedia, MenuItem, Typography } from '@mui/material';
import React from 'react'
import { ICatalogButtonItem } from '../../../types/types';


interface CatalogButtonItemProps {
  item:ICatalogButtonItem;   
}

const CatalogButtonItem: React.FC<CatalogButtonItemProps>  = ({item}) => {
  return (
        <MenuItem key={item.id}>
          <CardMedia  component='img' src={item.img} sx={{height:'24px', width:'24px'}}/>
          <Typography sx={{pl:1}}>{item.title}</Typography>
        </MenuItem>
  )
}

export default CatalogButtonItem