import CharacterCard from './CharacterCard'
import PropTypes from "prop-types";

function CharacterList({data}) {
  const html = data.map(character => <CharacterCard key={character.id} info={character}/>)
  return (
    <>
      <div>
        {html}
      </div>
    </>
  )
}

CharacterList.propTypes = {
  data : PropTypes.array
}

export default CharacterList