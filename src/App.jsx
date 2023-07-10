import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import axios from 'axios';
import './App.css';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const navigate = useNavigate();
   const EMAIL = "fabianblancowuest@gmail.com";
   const PASSWORD = "AccesoRick123";

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate("/home");
      }
   }

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

   // **Función para limpiar las cards de la pantalla
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

   function handleLogout() {
      setAccess(false);
      handleCleanScreen();
      navigate("/");
   }

   return (
      <div className='App'>
         {useLocation().pathname !== "/" ? <Nav onSearch={onSearch} handleCleanScreen={handleCleanScreen} logout={handleLogout} /> : null}
         <Routes>
            <Route path='/' element={<Form login={login}></Form>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/detail/:id' element={<Detail></Detail>}></Route>
         </Routes>
      </div>
   );
}

export default App;
