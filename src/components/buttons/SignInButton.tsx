import { Button } from '@mui/material'
import React from 'react'

interface SignInButtonProps {
   sx: object;
   title: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({sx,title}) => {
  return (
    <Button variant='contained' sx={sx}>{title}</Button>
  )
}

export default SignInButton