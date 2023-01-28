import './App.css';
import Nav from './components/nav/Nav.jsx';
import Cards from './components/cards/Cards.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
//import SearchBar from './components/searchbar/SearchBar.jsx'
//import characters, { Rick } from './data.js'
import { useState } from 'react';//importa el hook useState
import {Routes, Route } from 'react-router-dom';
import Error from './components/error/Error.jsx';

function App () {
  const [characters, setCharacters] = useState([]);
  
  
  const onSearch = (character) =>{  
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            //en esta linea le digo que me traiga el "valor" anterior (oldChars) y me lo agregue (en characters a traves de setCharacters ) -->  
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       }); 
  };

  const onClose =(id) =>{
  // filtro de cada caracter el id que no sea = (o sea diferente)al que tengo seleccionado 
    setCharacters(characters.filter(char => char.id !== id))
  };


  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
    
        <Routes>
          <Route path='/home' element={ <Cards 
         characters={characters} 
         onClose={onClose} />}/>
          
          <Route path='/about' element={<About />}/>
          <Route path='/detail/:detailId' element={<Detail />}/>
          <Route path='/*' element={<Error />}/>

        </Routes>
       
      
     
    </div>
  )
}

export default App
