import CharacterCard from './CharacterCard'
import PropTypes from "prop-types";

function CharacterList({data}) {
  const html = data.map(character => <CharacterCard key={character.id} info={character}/>)
  
  return (
    <>
      <div>
        {data.length === 0 ? <p>No exite el personaje</p> : html}
      </div>
    </>
  )
}

CharacterList.propTypes = {
  data : PropTypes.array
}

export default CharacterList