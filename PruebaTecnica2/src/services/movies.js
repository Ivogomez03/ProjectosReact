const API_KEY = 'eb93fe0b'
export const searchMovies = async ({ search }) => {

    if (search === '') return null

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)

        const data = await response.json();

        const movies = data.Search;

        const mappedMovies = movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

        return mappedMovies

    } catch (e) {
        throw new Error("Error searching movies");

    }
}