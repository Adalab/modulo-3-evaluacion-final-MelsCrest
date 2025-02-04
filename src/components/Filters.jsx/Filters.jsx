import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';

function Filters() {
  const handleForm = (ev)=>{
    ev.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <FilterByName/>
        <FilterByHouse/>
      </form>
    </>
  )
}

export default Filters