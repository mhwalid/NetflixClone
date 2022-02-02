

export const getPopularMovies = async () => {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e023efc4d49d5c1c3a00c0b9db3c2ece&language=en-US&page=1', {
        method : 'GET',
        headers : {
            'Accept': 'application/json',
            'content-type': 'application/json'
        }


    })
    let popularMovies = await response.json()
    return popularMovies

}