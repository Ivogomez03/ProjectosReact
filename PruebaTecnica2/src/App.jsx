import './App.css'
import { useEffect, useState } from 'react';
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch';
//const api_endpoint = ''

function App() {

  const { search, setSearch, error } = useSearch();
  const { movies: mappedMovies, loading, getMovies } = useMovies({ search });

  const handleChange = (event) => {

    const newQuery = event.target.value

    if (newQuery.startsWith(' ')) return;

    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {

    event.preventDefault()

    getMovies()
  }


  return (
    <>
      <div className='page'>

        <header>
          <h1>Buscador de peliculas</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} name="query" value={search} placeholder='Star Wars, Fight club ... ' />
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
        <main>
          {
            loading ? <p>Cargando...</p> : <Movies movies={mappedMovies} />
          }

        </main>
      </div>



    </>
  )
}

export default App
