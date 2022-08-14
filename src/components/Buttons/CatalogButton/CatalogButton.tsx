import { Box,  Typography } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import React  from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import CatalogButtonItem from './CatalogButtonItem';



interface CatalogButtonProps<T> {
  catalogList: T[];
   titleStyle: object;
   titleIconStyle: object;
   sx:object;
   renderItem:(item:T)=>React.ReactNode;
}



export default function CatalogButton<T> (props:CatalogButtonProps<T>){
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);


   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
   setAnchorEl(event.currentTarget);
  };
 
  const handleClose = () => {
    setAnchorEl(null);
  };

   return (
   <Box sx={props.sx}>
   <Button
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
  >
    <Box sx={props.titleIconStyle}>
      <DensityMediumIcon/>
      <Typography sx={props.titleStyle}> Каталог товаров </Typography>
    </Box>
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
   {props.catalogList.map(props.renderItem)}
  </Menu>
   </Box>
  )
}

