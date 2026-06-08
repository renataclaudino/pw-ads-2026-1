import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function Homepage() {
 return <>
   <Typography variant="h1" gutterBottom>
     Bem-vindo(a) à loja Karangos!
   </Typography>
   <Button component={Link} to="/sobre-a-autora" variant="contained" size="large">
     Ver sobre a autora
   </Button>
 </>
}