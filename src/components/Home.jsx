import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MovieState } from '../MovieContext'
import {
  Container,
  createTheme,
  LinearProgress,
  TextField,
  ThemeProvider,
} from '@mui/material'
import MovieCard from './MovieCard'

const Home = () => {
  const { darkMode } = MovieState()
  const [moviesList, setMoviesList] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMovieList = async () => {
      setLoading(true)
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=c67f1fa4&s=${search}`,
      )
      setMoviesList(data.Search)
      setLoading(false)
    }
    fetchMovieList()
  }, [search])

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: darkMode ? '#fff' : '#272727' },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TextField
          variant="outlined"
          label="Search for a movie"
          sx={{
            margin: '20px 0px',
            width: '100%',
          }}
          onChange={(e) => setSearch(e.target.value)}
        ></TextField>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {loading ? (
            <>
              <LinearProgress
                sx={{ width: '100%', backgroundColor: '#ff0000' }}
              />
            </>
          ) : (
            <>
              {moviesList?.map((movie) => (
                <MovieCard key={movie.imdbID} data={movie} />
              ))}
            </>
          )}
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default Home
