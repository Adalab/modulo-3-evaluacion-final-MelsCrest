import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import PropTypes from "prop-types";

function Filters({setFilterName, setFilterHouse}) {
  const handleForm = (ev)=>{
    ev.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <FilterByName setFilterName={setFilterName} />
        <FilterByHouse setFilterHouse={setFilterHouse}/>
      </form>
    </>
  )
}

Filters.propTypes = {
  setFilterName : PropTypes.func,
  setFilterHouse : PropTypes.func
}

export default Filters