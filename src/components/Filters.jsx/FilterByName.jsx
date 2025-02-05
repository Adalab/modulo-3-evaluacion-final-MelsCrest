import PropTypes from "prop-types";

function FilterByName({setFilterName, filterName}) {

  const handleInput = (ev) => {
    setFilterName(ev.target.value.toLowerCase())
  }

  return (
    <>
      <label>Busca por personaje: </label>
      <input type="text" onChange={handleInput} value={filterName !== ''? filterName : ''}/>
    </>
  )
}

FilterByName.propTypes = {
  setFilterName : PropTypes.func,
  filterName : PropTypes.string
}

export default FilterByName