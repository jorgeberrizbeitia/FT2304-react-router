import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
      {/* las etiquetas a SOLO las usaremos para enlaces externos */}

      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/timer"}>Timer</Link>


    </div>
  )
}

export default Navbar