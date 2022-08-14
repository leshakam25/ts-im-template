import { Container,Box } from '@mui/material'
import React from 'react'
import CatalogButton from '../buttons/CatalogButton/CatalogButton'
import {catalogList} from '../../store/catalogList'

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
      color:'#eee'
    },
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent:'space-between',
    alignItems:'center',
  }
}

const HeaderNav = () => {

  return (
    <Container maxWidth={false} sx={HeaderNavStyle.container}>
      <Box>
        <CatalogButton 
        sx={HeaderNavStyle.catalogButton} 
        catalogList={catalogList} 
        titleStyle={HeaderNavStyle.catalogButton.titleStyle} 
        titleIconStyle={HeaderNavStyle.catalogButton.titleIconStyle}/>
      </Box>
    </Container>
  )
}

export default HeaderNav