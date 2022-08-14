import { Box,  MenuItem,  Typography } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import CatalogButtonItem from './CatalogButtonItem';


interface CatalogButtonProps {
   sx:object;
   titleStyle: object;
   catalogList:object;
   titleIconStyle: object;
}

const CatalogButton: React.FC<CatalogButtonProps> = ({sx,catalogList,titleStyle,titleIconStyle}) => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);


   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
   setAnchorEl(event.currentTarget);
   console.log('catalogList',catalogList)
  };
 
  const handleClose = () => {
    setAnchorEl(null);
  };

   return (
   <Box sx={sx}>
   <Button
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
  >
    <Box sx={titleIconStyle}><DensityMediumIcon/></Box>
    <Typography sx={titleStyle}> Каталог товаров </Typography>
  </Button>

  <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    {/* {catalogList.map((el)=>(
    <CatalogButtonItem id={el.id} title={el.title} img={el.img}/>)
    )} */}
  </Menu></Box>
  )
}

export default CatalogButton