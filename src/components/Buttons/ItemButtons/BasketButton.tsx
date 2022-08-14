import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';

const BasketButton = () => {
  return (
    <Button variant='contained' sx={{height:'48px',width:'48px'}}>
      <AddShoppingCartIcon fontSize='medium' sx={{color:'white'}} />
    </Button>
  )
}

export default BasketButton