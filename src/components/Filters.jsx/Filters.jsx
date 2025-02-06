import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import PropTypes from "prop-types";
import FilterByGender from './FilterByGender';
import '../../styles/Filters.scss';


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
      <section className='filter'>
        <form onSubmit={handleForm} className='filter_form'>
          <FilterByName className='filter_form-name' setFilterName={setFilterName} filterName={filterName}/>
          <FilterByHouse className='filter_form-house' setFilterHouse={setFilterHouse} filterHouse={filterHouse}/>
          <FilterByGender className='filter_form-gender' setFilterGender={setFilterGender} filterGender={filterGender}/>
        </form>
        <button onClick={handleClick} className='filter_button'>Reset</button>
      </section>
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