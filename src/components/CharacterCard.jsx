import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CharacterCard = ({resident}) => {

  let [residentInfo, setResidentInfo] = useState()

  const getResidentInfo = () =>{
    axios.get(resident)
      .then(res => setResidentInfo(res.data))
  }


  useEffect(() =>{
    getResidentInfo()
  },[])

  return (
    <article className='character-card'>
      
      <div className="resident-img">
        <img src={residentInfo?.image} alt="" />
        <div className="status">
          {residentInfo?.status}
        </div>
      </div>

      <div className="resident-info">
        <div className="resident-name">{residentInfo?.name}</div>
        <div className="resident-origin">{residentInfo?.origin.name}</div>
        <div className="resident-episodes">{residentInfo?.episode.length}</div>
      </div>
    </article>
    
  )
}

export default CharacterCard