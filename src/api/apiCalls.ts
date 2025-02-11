const apiKey: string = '1da8a7244e961d1ce472a989e2fa4a90';

export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

export const upComingMovie: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`

export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key${apiKey}`

export const searchMovie = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`
}

export const movieDetail = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
}

export const movieDetailCast =  (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
}

export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`
}