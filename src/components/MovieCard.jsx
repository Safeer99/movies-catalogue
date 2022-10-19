import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MovieState } from '../MovieContext'

const MovieCard = ({ data }) => {
  const { setName } = MovieState()
  const navigate = useNavigate()

  const handleClick = () => {
    setName(data.Title)
    navigate(`/${data.Title}`)
  }
  return (
    <Card sx={{ width: 200, m: 2 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia component="img" image={data.Poster} alt={data.Title} />
        <CardContent sx={{ maxWidth: 200 }}>
          <Typography variant="h6" component="div">
            {data.Title}
          </Typography>
          <Typography>{data.Year}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MovieCard
