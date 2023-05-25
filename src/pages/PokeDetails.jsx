// axios para llamar la api para tener los detalles del pokemon
// ...

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function PokeDetails() {

  // 0. extraer la informacion que necesitamos de params o query
  const params = useParams()
  console.log(params)

  // 1. creamos el estado que almacenará la data
  const [ details, setDetails ] = useState(null)

  // 2. crear la funcion que recibirá la informacion de la API (Server)
  const getData = async () => {
    // 4. usar axios para llamar a la api y recibir la respuesta
    try {
      
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokeName}`)
      console.log(response)
      setDetails(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  // 3. useEffect para ejecutar getData en el componentDidMount
  useEffect(() => {
    getData()
  }, [params.pokeName])

  // 5. si la data no la hemos conseguido, mostramos al usuario un loading...
  if (details === null) {
    return (
      <div>
        <h3>... loading</h3>
      </div>
    )
  }

  return (
    <div>

      <h3>Detalles de Pokemon</h3>

      <div>

        <h4>#{details.id}. {details.name}</h4>
        <img src={details.sprites.front_shiny} alt="pokemon" />
        <p>altura: {details.height}</p>

      </div>

    </div>
  )
}

export default PokeDetails