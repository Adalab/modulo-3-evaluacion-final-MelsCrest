import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import PropTypes from "prop-types";

function Filters({setFilterName, setFilterHouse, filterName, filterHouse}) {
  const handleForm = (ev)=>{
    ev.preventDefault()
  }

  const handleClick = () => {
    setFilterName('')
    setFilterHouse('Gryffindor')
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <FilterByName setFilterName={setFilterName} filterName={filterName}/>
        <FilterByHouse setFilterHouse={setFilterHouse} filterHouse={filterHouse}/>
      </form>
      <button onClick={handleClick}>Reset</button>
    </>
  )
}

Filters.propTypes = {
  setFilterName : PropTypes.func,
  setFilterHouse : PropTypes.func,
  filterName : PropTypes.string,
  filterHouse : PropTypes.string
}

export default Filters