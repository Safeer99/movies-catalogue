import React from 'react'
import { AppBar, Container, styled, Toolbar, Typography } from '@mui/material'
import {
  DarkModeOutlined,
  MovieCreationOutlined,
  WbSunnyOutlined,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { MovieState } from '../MovieContext'

const Navbar = () => {
  const navigate = useNavigate()

  const { darkMode, setDarkMode } = MovieState()

  const handleClick = () => {
    setDarkMode((p) => !darkMode)
  }

  const DarkModeBtn = styled('div')(({ theme }) => ({
    backgroundColor: darkMode ? '#000000' : '#fff',
    width: '48px',
    height: '24px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
    cursor: 'pointer',
    '.slider': {
      position: 'absolute',
      left: 0,
      width: '22px',
      height: '22px',
      backgroundColor: 'red',
      borderRadius: '50%',
      margin: '1px',
      transform: darkMode ? 'translateX(24px)' : 'translateX(0px)',
    },
  }))

  return (
    <>
      <AppBar
        sx={{ backgroundColor: darkMode ? '#950101' : '#ff0000' }}
        position="static"
        color="transparent"
      >
        <Container>
          <Toolbar>
            <MovieCreationOutlined
              sx={{ color: '#fff', fontSize: '2rem', mr: 2 }}
            />
            <Typography
              variant="h6"
              onClick={() => navigate('/')}
              style={{
                flex: 1,
                color: '#fff',
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              <span>Movies</span>
              <span>Hub</span>
            </Typography>
            <DarkModeBtn onClick={handleClick}>
              <div className="slider" style={{ transition: 'all 1s' }}></div>
              <WbSunnyOutlined
                sx={{ color: '#fff', zIndex: '2', fontSize: '16px' }}
              />
              <DarkModeOutlined
                sx={{ color: '#000', zIndex: '2', fontSize: '16px' }}
              />
            </DarkModeBtn>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar
