import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss'; 
import Header from './Header';
import Filters from './Filters.jsx/Filters';
import CharacterList from './CharacterList';
import { useEffect, useState } from 'react';
import api from '../services/api';
// import CharacterDetail from './CharacterDetail';

function App() { 

  const [characteres, setCharacteres] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('');


  useEffect(()=>{
    api().then((data)=>{setCharacteres(data)})
  }, [])

  //Filtros: nombre y casa
  const filtersCharacteres = characteres
  .filter((character) => character.name.toLowerCase().includes(filterName))
  .filter((character) => filterHouse ? character.house === filterHouse : character.house === 'Gryffindor')


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Filters setFilterName={setFilterName} setFilterHouse={setFilterHouse}/>
            <CharacterList data={filtersCharacteres}/>
          </>
        }/>
        {/* Ruta para detail */}
        {/* <CharacterDetail/> */}
        {/* Ruta para not found */}
      </Routes>
      
    </>
  );
}

export default App;
