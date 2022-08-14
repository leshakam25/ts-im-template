import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, CardMedia, Container, InputAdornment, TextField, Typography } from '@mui/material'
import logo from '../images/logo.svg'
import SignInButton from './buttons/SignInButton';

const headerStyle ={

  contacts:{
    display :{
      sm:'none',
      md:'flex'
    },
    flexFlow: 'row wrap',
    justifyContent:'space-between',
    alignItems:'center',

  },

  container:{
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent:{
      sm:'space-between',
    },
    alignItems:'center',
    height:'80px',
  },

  logo :{
    width:'auto', height:'60px'
  },

  phone :{
    fontSize:'16px',
    fontFamily: 'Oswald',
    fontWeight:'400',
    px:1
  },

  workTime :{
    fontSize:'16px',
    fontFamily: 'Oswald',
    fontWeight:'400',
    color:'#838688',
    px:1
  },

  search:{
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent:'space-between',
    alignItems:'center',
    color: '#838688'
  },

  findInput:{
    display :{
      sm:'none',
      md:'block'
    },
    maxWidth: '107px',
  },

  signInButton:{
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'99px',
    height:'48px',
    color:'#eee',
    background:'#2A5275',
    fontFamily: 'Oswald',
    fontWeight: '500',
    fontSize:'16px',
    borderRadius:'8px',
    ml:{sm:'16px'}
  }

 }

const Header = () => {

   const phone1='+7 (812) 660-50-54'
   const phone2='+7 (958) 111-95-03'
   const workTime='Пн-вс: с 10:00 до 21:00'

  return (
    <Container maxWidth={false} sx={headerStyle.container}>
      <Box>
         <CardMedia component='img' src={logo} sx={headerStyle.logo} />
      </Box>
      <Box sx={headerStyle.contacts}>
        <Typography sx={headerStyle.phone}>{phone1}</Typography>
        <Typography sx={headerStyle.phone}>{phone2}</Typography>
        <Typography sx={headerStyle.workTime}>{workTime}</Typography>
      </Box>
      <Box sx={headerStyle.search}>
        <TextField sx={headerStyle.findInput} label="Поиск" variant='filled' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}/>
        <RemoveRedEyeOutlinedIcon/>
        <FavoriteBorderOutlinedIcon/>
        <BarChartOutlinedIcon/>
        <ShoppingCartOutlinedIcon/>
        <AccountCircleOutlinedIcon/>
        <SignInButton sx={headerStyle.signInButton} title='Войти'/>
      </Box>
    </Container>
  )
}

export default Header