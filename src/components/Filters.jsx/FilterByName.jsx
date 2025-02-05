import PropTypes from "prop-types";

function FilterByName({setFilterName}) {

  const handleInput = (ev) => {
    setFilterName(ev.target.value.toLowerCase())
  }

  return (
    <>
      <label>Busca por personaje: </label>
      <input type="text" onChange={handleInput} />
    </>
  )
}

FilterByName.propTypes = {
  setFilterName : PropTypes.func
}

export default FilterByName