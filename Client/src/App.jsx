import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import axios from "axios";
import "./App.css";
import Favorites from "./components/Favorites/Favorites";
import { swalFire1, swalFire2, swalFire3 } from "./sweetAlert";
import Swal from "sweetalert2";

function App() {
	const [characters, setCharacters] = useState([]); // ** Estado Inicial del arreglo de cards
	const [access, setAccess] = useState(false); // ** Estado incial del acceso al login
	const [datos, setDatos] = useState({}); //** Estado inicial para validar que el usuario este registrado */

	const navigate = useNavigate(); // ** Usuario y contraseña autorizado para el ingreso

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
			.catch(() => swalFire1());
	}
	// **Función para limpiar las cards de la pantalla
	function handleCleanScreen() {
		swalFire2().then((result) => {
			if (result.isConfirmed) {
				setCharacters([]);
				Swal.fire("¡Listo!", "Se ha limpiado la pantalla.", "success");
			}
		});
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
		swalFire3().then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				// Swal.fire("Saved!", "", "success");
				setAccess(false);
				setCharacters([]);
				navigate("/");
			}
			// else if (result.isDenied) {
			// 	Swal.fire("Changes are not saved", "", "info");
			// }
		});
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
				<Route path="favorites" element={<Favorites></Favorites>}></Route>
			</Routes>
		</div>
	);
}

export default App;
