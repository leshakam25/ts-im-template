import { Container,Box } from '@mui/material'
import React from 'react'
import { ICatalogButtonItem } from '../../types/types';
import CatalogButton from '../Buttons/CatalogButton/CatalogButton'
import CatalogButtonItem from '../Buttons/CatalogButton/CatalogButtonItem';

export const catalogList = [
  {
    id: 0,
    img: "https://i.postimg.cc/CLBqNTyH/menu-icons.png",
    title: "Гироскутеры",
  },
  {
    id: 1,
    img: "https://i.postimg.cc/R0R6Fvf9/menu-icons.png",
    title: "Электросамокаты",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/kGDtzL2C/menu-icons.png",
    title: "Моноколеса",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/zDPhKDQG/menu-icons.png",
    title: "Сигвеи и мини-сигвеи",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/R0R6Fvf9/menu-icons.png",
    title: "Электроскутеры",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/jSynpHSD/menu-icons.png",
    title: "Электровелосипеды",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/4dW98XNw/menu-icons-electric-skate.png",
    title: "Электроскейты",
  },
  {
    id: 7,
    img: "https://i.postimg.cc/hGgQcXXp/menu-icons.png",
    title: "Электромобили",
  },
  {
    id: 8,
    img: "https://i.postimg.cc/MT6Bbnxv/menu-icons.png",
    title: "Аксессуары",
  },
  {
    id: 9,
    img: "https://i.postimg.cc/wTCs4fgK/menu-icons.png",
    title: "Умные игрушки",
  },
  {
    id: 10,
    img: "https://i.postimg.cc/2yJBDTWZ/menu-icons-smart-watch.png",
    title: "Smart Watch",
  },
];

const HeaderNavStyle = {
  container:{
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent:'space-between',
    alignItems:'center',
    height:'60px',
    background: '#0E1821',
    color:'#eee',
    fontFamily:'Oswald'
  },
  catalogButton:{
    titleIconStyle:{
      color:'#eee',
      display: 'flex',
      alignItems:'center'
    },
    titleStyle:{
      color:'#eee',
      ml:1
    },
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent:'space-between',
    alignItems:'center',
  }
}

const HeaderNav = () => {

  return (
    <Container maxWidth='xl' sx={HeaderNavStyle.container}>
      <Box>
        <CatalogButton 
        renderItem={(item:ICatalogButtonItem)=><CatalogButtonItem item={item} key={item.id}/>}
        catalogList={catalogList}
        sx={HeaderNavStyle.catalogButton} 
        titleStyle={HeaderNavStyle.catalogButton.titleStyle} 
        titleIconStyle={HeaderNavStyle.catalogButton.titleIconStyle}/>
      </Box>
    </Container>
  )
}

export default HeaderNav