import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/fact'
import { useCatImage } from './hooks/useCatImage'

const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact));
  }
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

function App() {

  const { fact, refreshFact } = useCatFact();

  const { urlImg } = useCatImage({ fact });



  const handleClick = async () => {
    refreshFact()
  };

  return (
    <>
      <h1>App de gatos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {urlImg && <img src={urlImg} alt={`Gato con la palabra ${fact}`} />}
    </>
  )
}

export default App
