import axios from "axios";

export const getTwentyPopularMovies = async (page) => {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e023efc4d49d5c1c3a00c0b9db3c2ece&language=en-US&page='+page, {
        method : 'GET',
        headers : {
            'Accept': 'application/json',
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const getSingleMovie = async (id) => {
    let film = axios.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=e023efc4d49d5c1c3a00c0b9db3c2ece&language=en-US')
    return await film
}