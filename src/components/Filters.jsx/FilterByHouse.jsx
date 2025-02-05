import PropTypes from "prop-types";

function FilterByHouse({setFilterHouse}) {

  const handleChange = (ev) => {
    setFilterHouse(ev.target.value)
  }

  return (
    <>
      <label>Selecciona la casa: </label>
      <select onChange={handleChange}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </>
  )
}

FilterByHouse.propTypes = {
  setFilterHouse : PropTypes.func
}

export default FilterByHouse