import PropTypes from "prop-types";

function FilterByGender({setFilterGender, filterGender}) {

  const handleChange = (ev) => {
    setFilterGender(ev.target.value)
  }

  return (
    <>
      <div>
        <label>Selecciona el género: </label>
        <select onChange={handleChange} value={filterGender !== '' ? filterGender : ''}>
          <option value="">Selecciona</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
        </select>
      </div>
    </>
  )
}

FilterByGender.propTypes = {
  setFilterGender : PropTypes.func,
  filterGender : PropTypes.string
}

export default FilterByGender