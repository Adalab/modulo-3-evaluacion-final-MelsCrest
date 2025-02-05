import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../styles/CharacterDetail.scss';
import defaultImg from '../images/img-default.jpg';

function CharacterDetail({getInfo}) {
  const {idCharacter} = useParams();
  const data = getInfo(idCharacter);

  return (
    <>
      <div>
        <Link to="/">Volver</Link>
      </div>
      <div>
        {data ? <article>
          <img src={data.img !== '' ? data.img : defaultImg} alt="foto de personaje de Harry Potter" className="detail_img"/> 
          <h3>{data.name}</h3>
          <ul>
            {data.otherName.map((name, i) => <li key={i}>{name}</li>)}            
          </ul> 
          <p>{data.species}</p>
          <p>{data.alive}</p>
          <p>{data.gender}</p>
          <p>{data.house}</p>
        </article>
        : <p>Personaje no encontrado</p>
        }
        
      </div>
    </>
  )
}

CharacterDetail.propTypes = {
  getInfo : PropTypes.func
}

export default CharacterDetail