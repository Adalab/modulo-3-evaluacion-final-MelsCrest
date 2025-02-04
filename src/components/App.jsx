import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss'; 
import Header from './Header';
import Filters from './Filters.jsx/Filters';
import CharacterList from './CharacterList';
// import CharacterDetail from './CharacterDetail';

// const [characteres, setCharacteres] = useState([])


function App() { 
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Filters/>
            <CharacterList/>
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
