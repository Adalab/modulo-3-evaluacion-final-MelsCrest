import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../styles/CharacterDetail.scss';
import defaultImg from '../images/img-default.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import GryffindorIcon from '../images/gryffindor.svg';
import HufflepuffIcon from '../images/hufflepuff.svg';
import RavenclawIcon from '../images/ravenclaw.svg';
import SlytherinIcon from '../images/slytherin.svg';


function CharacterDetail({getInfo}) {
  const {idCharacter} = useParams();
  const data = getInfo(idCharacter);

function getIconHouse(house){
  switch(house){
      case 'Gryffindor' : 
        return <img src={GryffindorIcon} alt="Icono Gryffindor" className="detail_img-house"/>;
      case 'Hufflepuff' :
        return <img src={HufflepuffIcon} alt="Icono Hufflepuff" className="detail_img-house"/>;
      case 'Ravenclaw' :
        return <img src={RavenclawIcon} alt="Icono Ravenclaw" className="detail_img-house"/>;
      case 'Slytherin' :
  return <img src={SlytherinIcon} alt="Icono Slytherin" className="detail_img-house"/>;
      default:
        return null;
  }
};

  return (
    <>
      <section className="detail">
        <div className="detail_link">
          <Link to="/" className="detail_link-back">Volver</Link>
        </div>
        <div className="detail_card">
          {data ? <article className="article">
            <img src={data.img !== '' ? data.img : defaultImg} alt="foto de personaje de Harry Potter" className="article_img"/>
            <h3 className="article_name">Nombre: {data.name}</h3>
            {data.otherName.length > 0 ? <ul className="article_othernames">Otros nombres:
              {data.otherName.map((name, i) => <li key={i}><FontAwesomeIcon icon={faWandSparkles} /> {name}</li>)}
            </ul> : '' }
        
            <p className="article_species">Especie: {data.species}</p>
            <p className="article_alive">Estatus: {data.alive ? (
                <>
                  vivo <FontAwesomeIcon icon={faHeartPulse} />
                </>
              ):(
                <>
                  muerto <FontAwesomeIcon icon={faSkull} />
                </>
              )}
            </p>
            <p className="article_gender">Género: {data.gender}</p>
            <p className="article_house">Casa: {data.house} {getIconHouse(data.house)}</p>
          </article>
          : <p>Personaje no encontrado</p>
          }
          
        </div>
      </section>
    </>
  )
}

CharacterDetail.propTypes = {
  getInfo : PropTypes.func
}

export default CharacterDetail