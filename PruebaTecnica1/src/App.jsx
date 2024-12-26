import { useEffect, useState } from 'react'

import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

function App() {
  const [fact, setFact] = useState()
  const [urlImg, setUrlImg] = useState(null)

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        const { fact } = data

        setFact(fact)
      })
  }, [])

  useEffect(() => {

    //console.log(firstWord)
    if (!fact) return;
    const firstWord = fact.split(' ')[0];
    fetch(`https://cataas.com/cat/says/${firstWord}`)
      .then(response => {
        const { url } = response;

        setUrlImg(url)

      })

  }, [fact])

  return (
    <>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
      {urlImg && <img src={urlImg} alt={`Gato con la palabra ${fact}`} />}
    </>
  )
}

export default App
