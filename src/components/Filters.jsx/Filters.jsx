import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import PropTypes from "prop-types";
import FilterByGender from './FilterByGender';

function Filters({setFilterName, setFilterHouse, setFilterGender, filterName, filterHouse, filterGender}) {
  const handleForm = (ev)=>{
    ev.preventDefault()
  }

  const handleClick = () => {
    setFilterName('');
    setFilterHouse('Gryffindor');
    setFilterGender('');
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <FilterByName setFilterName={setFilterName} filterName={filterName}/>
        <FilterByHouse setFilterHouse={setFilterHouse} filterHouse={filterHouse}/>
        <FilterByGender setFilterGender={setFilterGender} filterGender={filterGender}/>
      </form>
      <button onClick={handleClick}>Reset</button>
    </>
  )
}

Filters.propTypes = {
  setFilterName : PropTypes.func,
  setFilterHouse : PropTypes.func,
  setFilterGender : PropTypes.func,
  filterName : PropTypes.string,
  filterHouse : PropTypes.string,
  filterGender : PropTypes.string
}

export default Filters