import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import TicketTable from "./components/TicketTable/TicketTable";
import axios from "axios";
import "./App.css";
import Swal from "sweetalert2";
import Favorites from "./components/Favorites/Favorites";

function App() {
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
	// **Función para limpiar las cards de la pantalla

	// ** Función para desloguearse
	function handleLogout() {
		Swal.fire({
			title: "¿Estás seguro que quieres salir?",
			showDenyButton: true,
			confirmButtonColor: "green",
			denyButtonText: "No, cancelar.",
			// showCancelButton: true,
			confirmButtonText: "Si, salir.",
			// denyButtonText: `Don't save`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				// Swal.fire("Saved!", "", "success");
				setAccess(false);
				// setCharacters([]);
				navigate("/");
				// handleCleanScreen();
			}
			// else if (result.isDenied) {
			// 	Swal.fire("Changes are not saved", "", "info");
			// }
		});
	}

	return (
		<div className="App">
			{useLocation().pathname !== "/" ? <Nav logout={handleLogout} /> : null}
			<Routes>
				<Route path="/tickets" element={<TicketTable></TicketTable>}></Route>
				{/* <Route path="/tickets" element={}></Route> */}
				<Route
					path="/"
					element={<Form login={login} datos={datos}></Form>}
				></Route>
				<Route path="/home" element={<Cards />}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/detail/:id" element={<Detail></Detail>}></Route>
				<Route path="favorites" element={<Favorites></Favorites>}></Route>
			</Routes>
		</div>
	);
}

export default App;
