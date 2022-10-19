import './App.css';
import { Container, styled } from "@mui/material"
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { MovieState } from './MovieContext';
import MovieDetails from './components/MovieDetails';

function App() {

  const { darkMode, name } = MovieState()

  const Box = styled('div')({
    backgroundColor: darkMode ? "#212121" : '#fff',
    minHeight: "100vh",
    width: "100%"
  })

  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path={`/${name}`} element={<MovieDetails />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;

//https://www.omdbapi.com/?apikey=c67f1fa4&t=thor