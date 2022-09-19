import { Container,Box } from '@mui/material'
import React from 'react'
import { ICatalogButtonItem } from '../../types/types';
import CatalogButton from '../Buttons/CatalogButton/CatalogButton'
import CatalogButtonItem from '../Buttons/CatalogButton/CatalogButtonItem';

export const catalogList = [
  {
    id: 0,
    img: "https://i.postimg.cc/Zn7JRFJm/ln97jm1ci4buo5o0ar8movmm2hc19fgo.png",
    title: "Распродажа",
  },
  {
    id: 1,
    img: "https://i.postimg.cc/K8K81VKH/04aqui40pmg8aqmuxwlm6lkvomzyq7uv.png",
    title: "Электромотоциклы",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/gJKz9b5n/yh9pd9fbahpdqse2ih9329pgod34spqi.png",
    title: "Электроквадроциклы",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/3wmrBvFj/sawmwri3b6opxwcngun1gvr73ymexpe5.png",
    title: "Электроснегоходы",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/65bQ5wQZ/9j1q3oi8bpdtyzaab5xkemow1a7yifud.png",
    title: "Электроскутеры",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/wvzqbjwC/fe7mybak5tz5kv48xel9qb5evbw2ahir.png",
    title: "Электровелосипеды",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/L8r6LTL6/y73wv1h43erj9gurxkm2xbm1u146o3be.png",
    title: "Электромобили",
  },
  {
    id: 7,
    img: "https://i.postimg.cc/bYTJW1c3/hdblre51njgkni4sqnct01g4knfp403y.png",
    title: "Багги / UTV",
  }, {
    id: 8,
    img: "https://i.postimg.cc/9fshvFJm/tricikl.png",
    title: "Электротрициклы",
  },
  {
    id: 9,
    img: "https://i.postimg.cc/sDgXr13y/3kudbac5epxgsd951yljeljy1w5eesg8.png",
    title: "Для детей",
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