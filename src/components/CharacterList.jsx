import CharacterCard from './CharacterCard'

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

export default CharacterList