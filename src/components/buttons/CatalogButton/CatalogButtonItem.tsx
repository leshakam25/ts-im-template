import { CardMedia, MenuItem, Typography } from '@mui/material';
import React from 'react'


interface CatalogButtonItemProps {
   id:number;
   img:string;
   title:string;
   
}

const CatalogButtonItem: React.FC<CatalogButtonItemProps>  = ({id,img,title}) => {
  return (
        <MenuItem key={id}>
          <CardMedia  component='img' src={img} sx={{height:'32px', width:'32px'}}/>
          <Typography textAlign="center">{title}</Typography>
        </MenuItem>
  )
}

export default CatalogButtonItem