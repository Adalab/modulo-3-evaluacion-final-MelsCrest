import PropTypes from "prop-types";
import '../styles/CharacterCard.scss'

function CharacterCard({info}) {

  const img = info.img !== '' ? info.img : 'https://i.pinimg.com/736x/29/63/88/296388832b6df6e3396a727e791e51cf.jpg'

  return (
    <article>
      <img src={img} alt="foto de personaje de Harry Potter" className="card_img"/> 
      <h3>{info.name}</h3>
      <p>{info.species}</p>
    </article>
  )
}

CharacterCard.propTypes = {
  info : PropTypes.object
}

export default CharacterCard