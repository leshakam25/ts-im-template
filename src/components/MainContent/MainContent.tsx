import {  Container } from '@mui/material'
import React from 'react'

interface MainContentProps<T>{
  items: T[];
  renderItem:(item:T)=>React.ReactNode
}

export default function MainContent<T>(props:MainContentProps<T>){

  return (
    <Container maxWidth='xl' sx={{display:'flex',flexFlow:'row wrap',justifyContent:'center'}}>
      {props.items.map(props.renderItem)}
    </Container>)
}