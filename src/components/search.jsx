import React, { useState } from 'react'


const API_KEY = "30de458775d8c75c76e63beb2a2319a4"
const API_MOVIE1 = (query) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
const API_IMG = "https://image.tmdb.org/t/p/w500"

const Search = () => {
   const [movies, setMovies] = useState([])
    const [inputValue, setInputValue] = useState("")

    const fetchMovies = async (input) => {
        try {
            const response = await fetch(API_MOVIE1(input))
            const data = await response.json()
            setMovies(data.results)
            setInputValue(input)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <input type="text" placeholder="search" value={inputValue} onChange={(e) => { fetchMovies(e.target.value) }} />
            <div className="row">
                {
                    movies.map((movie) => (
                        <div className="card col-md-3" key={movie.id}>
                            <img src={API_IMG + movie.poster_path} alt={movie.title} />
                            <div className="card-body">
                                <h1>{movie.title}</h1>
                                <p>imdb: {movie.vote_avarage}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Search
