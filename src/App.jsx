import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import axios from 'axios';
import './App.css';

function App() {
   const [characters, setCharacters] = useState([]);

   //**Función para agregar personajes
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
         //! Captura el error para que no rompa la app!
      }).catch(err => alert("error", err))
      // console.log("Estoy en app", id);
   }

   function handleCleanScreen() {
      setCharacters([])
   }

   //**Función para eliminar personajes
   function onClose(id) {
      id = parseInt(id);
      setCharacters(characters.filter((item) => {
         return item.id !== id;
      }))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} handleCleanScreen={handleCleanScreen} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/detail/:id' element={<Detail></Detail>}></Route>
         </Routes>


      </div>
   );
}

export default App;
