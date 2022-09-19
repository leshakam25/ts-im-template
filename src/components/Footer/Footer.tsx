import { CardMedia, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import logo from '../../images/logo.svg'

const footerStyle ={
   container:{
      minWidth:'418px',
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
      alignItems:'left'
   },
   logo:{
      width:'198px', height:'60px'
   },
   verticalContainer:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'left',
      flexWrap:'wrap',
   },
   contacts:{
      time:{
         color:'gray'
      },
   }
}

const Footer = () => {
  return (
   <Container sx={footerStyle.container} maxWidth='xl'>
      <Box sx={footerStyle.verticalContainer}>
         <CardMedia component='img' src={logo} sx={footerStyle.logo}/>
         <Box sx={footerStyle.contacts}>
            <Typography>
               +7 (958) 111-95-03
            </Typography>
            <Typography>
               +7 (812) 660-50-54
            </Typography>
            <Typography sx={footerStyle.contacts.time}>
               Пн-вс: с 10:00 до 21:00
            </Typography>
         </Box>
         <Box>
            <Typography>Проспект Стачек 67 к.5</Typography>
            <Typography>Лиговский проспект 205</Typography>
            <Typography>Гражданский проспект, 116 к.5</Typography>
         </Box>
      </Box>
      <Box sx={footerStyle.verticalContainer}>
         <Typography>Для клиента</Typography>
         <Typography>
            Как купить <br />
            Доставка и оплата<br />
            Кредит<br />
            Политика конфиденциальности<br />
            Вопросы и ответы (F.A.Q.) <br />
            Сервис и гарантия
         </Typography>
      </Box>
      <Box sx={footerStyle.verticalContainer}>
         <Typography>
            О магазине
         </Typography>
         <Typography>
            Отзывы <br />
            Наши преимущества <br />
            История компании <br />
            Сотрудничество <br />
            Партнёрская программа <br />
            Вакансии <br />
         </Typography>
      </Box>
   </Container>
  )
}

export default Footer