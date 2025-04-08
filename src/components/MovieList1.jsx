import React, { useEffect, useState } from 'react'

const API_KEY = "30de458775d8c75c76e63beb2a2319a4"
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY
const API_IMG = "https://image.tmdb.org/t/p/w500"


const MovieList1 = () => {
const [movies, setMovies] = useState([])

const [inputValue, setInputValue] = useState("")

    useEffect(()=>{
    fetchMovies()
},[])
 const fetchMovies = async ()=> {
    try {
        const response = await fetch (API_URL)
         const data = await response.json()
         setMovies(data.results)
    } catch (error) {
        console.log(error)
    }
 }

 const filteredMovies = movies.filter(movie =>(
    inputValue.length > 3 || movie.title.toLowerCase().includes(inputValue.toLowerCase())
 ))
  return (
    <div>
       <div>
        <input type="text"  value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
       </div>
       <div>
        {filteredMovies.map((movie)=>(
            <div>
                {movie.title}
            </div>
        ))}
       </div>
    </div>
  )
}

export default MovieList1