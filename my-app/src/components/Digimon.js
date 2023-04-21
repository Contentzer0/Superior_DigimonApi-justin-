import "../Digimon.css";
import { useState, useEffect } from 'react'
import React from 'react'

const Digimon = () => {
    const [digimon, setDigimon] = useState({})
    const [endPoint, setEndpoint] = useState(1)

    useEffect(() => {
      fetch(`https://www.digi-api.com/api/v1/digimon/${endPoint}`,
      {headers: { Accept: "application/json"}
      })
      .then(res => res.json())
      .then(data => setDigimon(data))
    }, [endPoint])

    const handleClick = () => {
        if (endPoint === 1422) {
            setEndpoint(1)
        } else {
            setEndpoint((endPoint) => endPoint + 1)
        }
    }

    const handleClock = () => {
        if (endPoint === 1) {
            setEndpoint(1422)
        } else {
            setEndpoint((endPoint) => endPoint - 1)
        }
    }

    const handleDescription = () => {
        let des = digimon.descriptions?.find((descrip) => {
            return descrip.language === "en_us"
        })

        return des?.description
    }

    return (
        <div className="container">
            <p className="bold">ID: {digimon.id}</p>
            <p className="name">Name: {digimon.name} </p>
            <div className="buttonContainer">
                <button onClick={handleClock} className="right">⬅️</button>
                {digimon.images && <img src={digimon.images[0].href} alt="whoops" className="image"/>}
                <button onClick={handleClick} className="left">➡️</button>
            </div>
            
            {digimon.types && <p className="bold">Type: {digimon.types[0]?.type}</p>}
            {digimon.levels && <p className="bold">Level: {digimon.levels[0]?.level}</p>}
            {digimon.attributes && <p className="bold">Attribute: {digimon.attributes[0]?.attribute}</p>}
            {digimon.descriptions && <p><span className="bold">Description: </span>{handleDescription()}</p>}

        </div>
    )     
}
export default Digimon