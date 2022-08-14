import { Button, Typography } from '@mui/material'
import React from 'react'

const OneClickButton = () => {
  return (
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
  )
}

export default OneClickButton