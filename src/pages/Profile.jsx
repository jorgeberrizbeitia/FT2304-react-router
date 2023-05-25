// para acceder a parametros dinamicos, usamos el hook useParams
import { useParams } from "react-router-dom"

function Profile() {

  // const algo = useParams()
  // console.log(algo)
  // also es como el req.params que estudiamos en M2

  const params = useParams()
  console.log(params)
  // const { category, username } = useParams()

  return (
    <div>
      
        Este es el perfil de {params.username}
        {/* Este es el perfil de {username} */}

    </div>
  )
}

export default Profile