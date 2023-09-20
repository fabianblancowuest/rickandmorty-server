import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanScreen, searchById } from "../../../redux/actions/actions";
import Swal from "sweetalert2";

export default function SearchBar() {
	// **Estado local
	const characters = useSelector((state) => state.characters);
	const initialState = "";
	const [id, setId] = useState(initialState);

	const dispatch = useDispatch();
	function handleChange(event) {
		// console.log("funciona el handle", event)
		setId(event.target.value);
	}

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			// Lógica que se ejecuta al presionar Enter
			// console.log('Se presionó la tecla Enter');
			setId(event.target.value);
			dispatch(searchById(id));
			setId(initialState);
		}
	};

	const handleClick = () => {
		const filterCharacter = characters.filter((character) => {
			return character.id === id, console.log("Hola");
		});
		console.log(characters);
		console.log(id);
		console.log(filterCharacter);
		if (filterCharacter.length) {
			alert("¡Ya existe ese personaje!");
		} else {
			dispatch(searchById(id));
		}
		// setId(initialState);
	};
	function handleRandom() {
		const random = Math.round(Math.random() * (826 - 1) + 1);
		dispatch(searchById(random));
	}
	function handleCleanScreen() {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to reverse this!",
			icon: "warning",
			showCancelButton: true,
			cancelButtonText: "Cancel",
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, clean it!",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(cleanScreen());
				Swal.fire("Done!", "The screen has been cleaned..", "success");
			}
		});
	}

	const inputID = document.getElementById("input");

	function cambiarTxt() {
		inputID.placeholder = "Enter an ID: 1-826";
	}
	function txtOriginal() {
		inputID.placeholder = "Search character...";
	}

	return (
		<div className={styles.div}>
			<input
				id="input"
				className={styles.input}
				type="search"
				title="Type the character id and press the ENTER key"
				placeholder="Search character..."
				onMouseOver={cambiarTxt}
				onMouseLeave={txtOriginal}
				onChange={handleChange}
				onKeyDown={handleKeyPress}
			/>
			<input
				type="submit"
				value="ADD CHARACTER"
				className={styles.button}
				onClick={handleClick}
			></input>
			<input
				type="submit"
				value="RANDOM"
				className={styles.button}
				onClick={handleRandom}
			></input>
			<input
				type="submit"
				value="CLEAN SCREEN"
				className={styles.button}
				onClick={handleCleanScreen}
			></input>
		</div>
	);
}
