import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
	// Función para recorrer el arreglo de objeto de personajes y renderizar cada propiedad en la pantalla
	const show = characters.map((character) => {
		return (
			<div key={character.id}>
				<Card
					id={character.id}
					name={character.name}
					status={character.status}
					species={character.species}
					gender={character.gender}
					origin={character.origin.name}
					image={character.image}
					onClose={onClose}
				/>
			</div>
		);
	});
	return (
		<div className={styles.cards}>
			{/* Ejecutamos la función que recorre el arreglo */}
			{show}
		</div>
	);
}
