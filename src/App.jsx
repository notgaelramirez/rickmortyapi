import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './components/CharacterCard'

function App() {

  let [inputText, setInputText] = useState()
  let [locationData, setLocationData] = useState()
  let [locationNumber, setNumber] = useState(Math.ceil(Math.random() * 126))
  
  const getRandomLocation = () =>{
    
    let URL = `https://rickandmortyapi.com/api/location/${locationNumber}`

    axios.get(URL)
      .then(res => setLocationData(res.data))
      .catch(error => console.log(error))
  }

  useEffect(() =>{
    getRandomLocation()
  }, [])
  
  const onSubmitFunction = e =>{
    e.preventDefault()
    setInputText(e.target.firstChild.value) 
    setNumber(locationNumber = inputText)
    numberLocation()
  }

  const numberLocation = () =>{
    URL = `https://rickandmortyapi.com/api/location/${locationNumber}`

    axios.get(URL)
      .then(res => setLocationData(locationData = res.data))
      .catch(error => error)
  }

  
  
  return (
    <div className="App">
      <header className="header">
      </header>

      <div className='search-bar'>
        <form className='form' onSubmit={onSubmitFunction} action="">
          <input className='input' placeholder='Search from 1-126'type="text" />
          <button>Search</button>
        </form>
      </div>

      <article>
        <header className="location-info">
          <div>Location name: <span className='info-span'>{locationData?.name}</span></div>
          <div>Type: <span className="info-span">{locationData?.type}</span></div>
          <div>Dimension: <span className="info-span">{locationData?.dimension}</span></div>
          <div>Residents: <span className="info-span">{locationData?.residents.length}</span></div>
        </header>

        <div className="residents-list">
          {locationData?.residents.map(resident => <CharacterCard 
          resident={resident}
          key={resident}/>)}
        </div>
      </article>
    </div>
  )
}

export default App
