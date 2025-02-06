import PropTypes from "prop-types";
import '../styles/CharacterCard.scss'
import { Link } from "react-router-dom";
import defaultImg from '../images/img-default.jpg';

function CharacterCard({info}) {

  return (
    <article className="card">
      <Link to={`/character/${info.id}`} className="card_link">
        <img src={info.img !== '' ? info.img : defaultImg} alt="foto de personaje de Harry Potter" className="card_link-img"/> 
        <h3 className="card_link-name">{info.name}</h3>
        <p className="card_link-species">{info.species}</p>
      </Link>
    </article>
  )
}

CharacterCard.propTypes = {
  info : PropTypes.object
}

export default CharacterCard