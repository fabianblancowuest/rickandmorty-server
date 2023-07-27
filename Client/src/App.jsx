import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import axios from "axios";
import "./App.css";

function App() {
	// ** Estado Inicial del arreglo de cards
	const [characters, setCharacters] = useState([]);
	// ** Estado incial del acceso al login
	const [access, setAccess] = useState(false);
	//** Estado inicial para validar que el usuario este registrado */
	const [datos, setDatos] = useState({});

	// ** Usuario y contraseña autorizado para el ingreso
	const navigate = useNavigate();

	function login(userData) {
		const { email, password } = userData;
		const URL = "http://localhost:3001/user/login/";
		axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
			const { access } = data;
			setAccess(access);
			access && navigate("/home");
		});
	}

	//**Función para agregar personajes
	function onSearch(id) {
		// axios(`https://rickandmortyapi.com/api/character/${id}`)
		axios(`http://localhost:3001/character/${id}`)
			.then(({ data }) => {
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				}
			})
			//! Captura el error para que no rompa la app!
			// .catch((err) => alert(err.response.data));
			.catch(() =>
				alert("No existen personajes con ese ID\nIngrese un ID válido"),
			);
	}

	// **Función para limpiar las cards de la pantalla
	function handleCleanScreen() {
		setCharacters([]);
	}

	//**Función para eliminar personajes
	function onClose(id) {
		id = parseInt(id);
		setCharacters(
			characters.filter((item) => {
				return item.id !== Number(id);
			}),
		);
	}

	// ** Función para desloguearse
	function handleLogout() {
		setAccess(false);
		handleCleanScreen();
		navigate("/");
	}

	return (
		<div className="App">
			{useLocation().pathname !== "/" ? (
				<Nav
					onSearch={onSearch}
					handleCleanScreen={handleCleanScreen}
					logout={handleLogout}
				/>
			) : null}
			<Routes>
				<Route
					path="/"
					element={<Form login={login} datos={datos}></Form>}
				></Route>
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/detail/:id" element={<Detail></Detail>}></Route>
			</Routes>
		</div>
	);
}

export default App;
