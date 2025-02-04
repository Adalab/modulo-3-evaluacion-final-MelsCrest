
function CharacterCard({info}) {
  return (
    <article>
      <img src={info.img} alt="" /> {/* recordar hacer la img por defecto https://i.pinimg.com/736x/29/63/88/296388832b6df6e3396a727e791e51cf.jpg */}
      <h3>{info.name}</h3>
      <p>{info.species}</p>
    </article>
  )
}

export default CharacterCard