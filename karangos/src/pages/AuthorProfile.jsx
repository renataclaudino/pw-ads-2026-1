import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import CoffeeIcon from '@mui/icons-material/Coffee'
import authorPhoto from '../assets/minhaFoto.jpg'

export default function AuthorProfile() {
  const [likes, setLikes] = useState(0)

  const handleLike = () => {
    const nextLikes = likes + 1
    setLikes(nextLikes)
    alert(`Likes atuais: ${nextLikes}`)
  }

  return (
    <Container sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
        sobre a autora:
      </Typography>

      <Card sx={{ maxWidth: 450 }}>
        <CardMedia
          component="img"
          height="180"
          image={authorPhoto}
          alt="Foto da autora"
          sx={{ objectFit: 'contain', p: 2 }}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Olá, sou a Renata! Seja bem-vindo(a) ao meu perfil.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Viciada em <CoffeeIcon sx={{ fontSize: 'small', mx: 0.5, verticalAlign: 'middle' }} />, gateira, corinthiana e estudante de Análise e Desenvolvimento de Sistemas na Fatec Franca/SP.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleLike} startIcon={<ThumbUpIcon />}>
            Curtir ({likes})
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
