import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// 1. como contactamos a la api: Axios o fetch
// 2. en que momento nosotros llamamos a la api: ComponentDidMount
// 3. en donde guardamos lo que recibimos de la api

function SideNavbar() {

  const [ allPokemon, setAllPokemon ] = useState(null)

  useEffect(() => {

    // axios.get("https://pokeapi.co/api/v2/pokemon") // async. 0.5 seg
    // .then((response) => {
    //   console.log(response.data.results)
    //   // setTimeout(() => {
    //   //   setAllPokemon(response.data.results)
    //   // }, 2000) // ejemplo de replicar que la llamada toma más tiempo
    //   setAllPokemon(response.data.results)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })

    getData()

  }, [])

  const getData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      setAllPokemon(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  // clausula que diga. 
  // 1. Si el estado está vacio. renderiza un mensaje de espera
  // 2. Si ya tenemos la data entonces renderizamos la data
  if (allPokemon === null) {
    return (<div style={{minWidth: "200px"}}>
        <h3>Recibiendo los pokemon</h3>
      </div>)
  }

  return (
    <div style={{minWidth: "200px"}}>
      
      <h3>Enlaces Pokemon</h3>

      {allPokemon.map(({name}) => {
        return (
          // <p key={eachPokemon.name}>{eachPokemon.name}</p>
          <p key={name}>
            <Link to={`/poke/${name}`}>{name}</Link>
          </p>
        )
      })}

    </div>
  )
}

export default SideNavbar



    // fetch("https://pokeapi.co/api/v2/pokemon")
    // .then((response) => {
    //   console.log(response)
    //   return response.json()
    // })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })