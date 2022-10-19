import { Container, LinearProgress, styled, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MovieState } from '../MovieContext'

const MovieDetails = () => {
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState()
  const { name, darkMode } = MovieState()

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true)
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=c67f1fa4&t=${name}`,
      )
      setDetails(data)
      setLoading(false)
    }
    fetchMovieDetails()
  }, [name])

  const Wrapper = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  }))

  const Box = styled('div')(({ theme }) => ({
    flex: '3.5',
    marginTop: '20px',
    borderRight: '2px solid grey',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      borderRight: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      flexDirection: 'column',
    },
  }))

  const LeftBar = styled('div')(({ theme }) => ({
    borderRight: '2px solid grey',
    paddingRight: '20px',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      margin: 'auto',
      width: '60%',
    },
  }))

  const MiddleSection = styled('div')(({ theme }) => ({
    flex: '3',
    margin: '0px 20px',
    [theme.breakpoints.down('md')]: {
      flex: '2',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '20px 0px',
    },
  }))

  const Sidebar = styled('div')(({ theme }) => ({
    flex: '1.5',
    marginTop: '20px',
    marginLeft: '20px',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
  }))

  const styles = {
    sideDetails: {
      color: darkMode ? '#fff' : '#000',
      mb: 1,
    },
  }

  return (
    <Container sx={{ mt: 3 }}>
      {loading ? (
        <>
          <LinearProgress style={{ backgroundColor: '#ff0000' }} />
        </>
      ) : (
        <>
          <Wrapper>
            <Box>
              <LeftBar>
                <img src={details?.Poster} alt="" width="100%" />
              </LeftBar>
              <MiddleSection>
                <Typography
                  variant="h4"
                  sx={{
                    color: darkMode ? '#fff' : '#000',
                    mb: 1,
                  }}
                >
                  {details?.Title}
                </Typography>
                <Typography sx={{ mb: 2, mt: 2 }}>
                  <span
                    style={{
                      borderRadius: '3px',
                      fontSize: '13px',
                      padding: '2px 4px',
                      color: darkMode ? '#000' : '#fff',
                      fontWeight: '600',
                      backgroundColor: darkMode ? '#fff' : '#000',
                      marginRight: '10px',
                    }}
                  >
                    {details?.Rated}
                  </span>
                  <span
                    style={{
                      borderLeft: '2px solid grey',
                      padding: '2px 10px',
                      color: darkMode ? '#fff' : '#000',
                      fontWeight: '600',
                    }}
                  >
                    {details?.Runtime}
                  </span>
                  <span
                    style={{
                      borderLeft: '2px solid grey',
                      padding: '2px 10px',
                      color: darkMode ? '#fff' : '#000',
                      fontWeight: '600',
                    }}
                  >
                    {details?.Released}
                  </span>
                </Typography>
                <Typography
                  variant="p"
                  style={{
                    color: darkMode ? '#fff' : '#000',
                    fontWeight: '500',
                  }}
                >
                  {details?.Plot}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? '#fff' : '#000',
                    mt: 2,
                    fontWeight: '600',
                  }}
                >
                  Genre:{' '}
                  {details?.Genre?.split(', ').map((word) => {
                    return (
                      <span
                        key={word}
                        style={{
                          borderRadius: '10px',
                          fontSize: '13px',
                          padding: '2px 4px',
                          color: darkMode ? '#fff' : '#000',
                          fontWeight: '600',
                          backgroundColor: darkMode ? 'transparent' : '#fff',
                          marginRight: '10px',
                          border: darkMode
                            ? '2px solid #fff'
                            : '2px solid #000',
                          cursor: 'pointer',
                        }}
                      >
                        {word}
                      </span>
                    )
                  })}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? '#fff' : '#000',
                    mt: 4,
                    fontWeight: '600',
                    display: 'flex',
                  }}
                >
                  {details?.Ratings?.map((score) => {
                    return (
                      <div
                        style={{
                          width: '30%',
                          padding: ' 0px 25px',
                          borderRight:
                            score.Source !== 'Metacritic' && '2px solid grey',
                          textAlign: 'center',
                        }}
                      >
                        <div>{score.Value}</div>
                        <div>
                          {score.Source === 'Internet Movie Database'
                            ? 'IMDb'
                            : score.Source}
                        </div>
                      </div>
                    )
                  })}
                </Typography>
              </MiddleSection>
            </Box>
            <Sidebar>
              <Typography sx={styles.sideDetails}>
                <span style={{ fontWeight: '600' }}>Actors:{'  '}</span>
                {details?.Actors}
              </Typography>
              <Typography sx={styles.sideDetails}>
                <span style={{ fontWeight: '600' }}>Director:{'  '}</span>
                {details?.Director}
              </Typography>
              <Typography sx={styles.sideDetails}>
                <span style={{ fontWeight: '600' }}>Writers:{'  '}</span>
                {details?.Writer}
              </Typography>
              <Typography sx={styles.sideDetails}>
                <span style={{ fontWeight: '600' }}>Box Office:{'  '}</span>
                {details?.BoxOffice}
              </Typography>
              <Typography sx={styles.sideDetails}>
                <span style={{ fontWeight: '600' }}>Awards:{'  '}</span>
                {details?.Awards}
              </Typography>
              <Typography sx={styles.sideDetails}>
                <span style={{ fontWeight: '600' }}>Country:{'  '}</span>
                {details?.Country}
              </Typography>
              <Typography sx={styles.sideDetails}>
                <span style={{ fontWeight: '600' }}>Language:{'  '}</span>
                {details?.Language}
              </Typography>
            </Sidebar>
          </Wrapper>
        </>
      )}
    </Container>
  )
}

export default MovieDetails
