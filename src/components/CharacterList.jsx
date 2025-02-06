import CharacterCard from './CharacterCard'
import PropTypes from "prop-types";
import '../styles/CharacterList.scss';

function CharacterList({data}) {
  const html = data.map(character => <CharacterCard key={character.id} info={character}/>)
  
  return (
    <>
      <div className='list'>
        {data.length === 0 ? <p className='notExits'>No exite el personaje</p> : html}
      </div>
    </>
  )
}

CharacterList.propTypes = {
  data : PropTypes.array
}

export default CharacterList