import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss'; 
import Header from './Header';
import Filters from './Filters.jsx/Filters';
import CharacterList from './CharacterList';
import { useEffect, useState } from 'react';
import api from '../services/api';
import CharacterDetail from './CharacterDetail';

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

  //obtener informacion para enviar a CharacterDetail
  const getInfo = (idCharacter) => {
    const characterFound = characteres.find((character)=>character.id === idCharacter)
    
    return characterFound;
  }

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
        <Route path="/character/:idCharacter" element={
          <CharacterDetail getInfo={getInfo}/>
        }/>
        {/* Ruta para not found */}
      </Routes>
      
    </>
  );
}

export default App;
