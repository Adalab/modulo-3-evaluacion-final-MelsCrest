import { useParams } from "react-router-dom"
import PropTypes from "prop-types";

function CharacterDetail({getInfo}) {
  const {idCharacter} = useParams()
  //idCharacter devuelve el id
  const data = getInfo(idCharacter);

  return (
    <article>
      <img src={data.img} alt="foto de personaje de Harry Potter" /> {/* recordar hacer la img por defecto https://i.pinimg.com/736x/29/63/88/296388832b6df6e3396a727e791e51cf.jpg */}
      <h3>{data.name}</h3>
      <h4>{data.otherName}</h4> {/* si tiene mostrarlo si no tiene:ocultar esta línea o poner que no tiene */}
      <p>{data.species}</p>
      <p>{data.alive}</p>
      <p>{data.gender}</p>
      <p>{data.house}</p>
    </article>
  )
}

CharacterDetail.propTypes = {
  getInfo : PropTypes.func
}

export default CharacterDetail