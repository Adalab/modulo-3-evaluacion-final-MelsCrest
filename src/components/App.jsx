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

  useEffect(()=>{
    api().then((data)=>{setCharacteres(data)})
  }, [])

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Filters/>
            <CharacterList data={characteres}/>
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
