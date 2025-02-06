import PropTypes from "prop-types";

function FilterByHouse({setFilterHouse, filterHouse}) {

  const handleChange = (ev) => {
    setFilterHouse(ev.target.value)
  }

  return (
    <>
      <div>
        <label>Selecciona la casa: </label>
        <select onChange={handleChange} value={filterHouse !== 'Gryffindor' ? filterHouse : 'Gryffindor'}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </div>
    </>
  )
}

FilterByHouse.propTypes = {
  setFilterHouse : PropTypes.func,
  filterHouse : PropTypes.string
}

export default FilterByHouse