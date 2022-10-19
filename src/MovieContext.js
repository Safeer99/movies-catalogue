import { createContext, useContext, useState } from "react";

const Movie = createContext()

const MovieContext = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const [name, setName] = useState()

    return (
        <Movie.Provider value={{ darkMode, setDarkMode, name, setName }}>
            {children}
        </Movie.Provider>
    )
}

export default MovieContext

export const MovieState = () => {
    return useContext(Movie);
}
