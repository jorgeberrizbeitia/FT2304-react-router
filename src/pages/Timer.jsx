import { useState, useEffect } from "react"


function Timer() {

  const [ timerValue, setTimerValue ] = useState(10)
  const [ intervalId, setIntervalId ] = useState()
  const [ message, setMessage ] = useState("Tempurizados andando")

  // setInterval que cada segundo dismuniya timerValue
  useEffect(() => {
     //* ComponentDidMount
    console.log("Esto se ejecuta cuando el componente existe")
    const id = setInterval(() => {
      // console.log("invocando el setInterval cada segundo", timerValue)
      // setTimerValue(timerValue - 1)
      setTimerValue((valorActualDelEstado) => {
        // retornamos lo que queremos sea el valor nuevo
        // console.log(valorActualDelEstado)
        return valorActualDelEstado - 1
      })
    }, 1000)

    // guardar el id del intervalo en el estado
    setIntervalId(id)

    //* ComponentWillUnmount
    // return () => {
    //   // funcion de limpieza (lo que ocurre cuando el componente sale de la renderización)
    //   console.log("El componente dejo de existir")
    //   clearInterval(intervalId)
    // }
  }, []) //* ComponentDidMount

  useEffect(() => {
    return () => {
      console.log("El componente dejo de existir")
      clearInterval(intervalId)
    }
  }, []) //* ComponentWillUnmount

  useEffect(() => {
    
    console.log("el timer ha cambiado", timerValue)
    if (timerValue <= 0) {
      console.log("queremos detener el time")
      clearInterval(intervalId)
      setMessage("Se acabo el tiempo!")
      // setTimerValue(10) // ejemplo de actualizar el mismo estado
    }
  }, [timerValue]) //* ComponentDidUpdate
  // la dependencia es: que va a cambiar y que se ejecutará cuando eso ocurra

  return (
    <div>
      
      <h1>Tempurizador 1 minuto</h1>
      <h2>{timerValue}</h2>

      <p>{message}</p>

    </div>
  )
}

export default Timer