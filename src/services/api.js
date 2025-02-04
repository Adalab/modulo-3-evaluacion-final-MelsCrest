
function api() {
  
  return fetch('https://hp-api.onrender.com/api/characters')
  .then(resp => resp.json())
  .then((data)=>{
    const newArray = data.map((character)=>{
      return{
        id : character.id,
        name : character.name,
        otherName : character.alternate_names,
        species : character.species,
        gender : character.gender,
        house : character.house,
        alive : character.alive,
        img : character.image
      }
    })
    return newArray;
  })

}

export default api