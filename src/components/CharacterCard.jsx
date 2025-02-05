import PropTypes from "prop-types";
import '../styles/CharacterCard.scss'
import { Link } from "react-router-dom";
import defaultImg from '../images/img-default.jpg';

function CharacterCard({info}) {

  const img = info.img !== '' ? info.img : defaultImg;

  return (
    <article>
      <Link to={`/character/${info.id}`}>
        <img src={img} alt="foto de personaje de Harry Potter" className="card_img"/> 
        <h3>{info.name}</h3>
        <p>{info.species}</p>
      </Link>
    </article>
  )
}

CharacterCard.propTypes = {
  info : PropTypes.object
}

export default CharacterCard