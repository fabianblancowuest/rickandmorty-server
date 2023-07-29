import styles from "./Favorites.module.css";
import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites = (props) => {
	console.log(props);
	// const {name, status, species, gender, origin, image, id, location, onClose}  = props;
	return (
		<section className={styles.favorites}>
			<div className={styles.container}>
				{props.favorites?.map((character, index) => {
					return (
						<Card
							key={index}
							id={character.id}
							name={character.name}
							status={character.status}
							species={character.species}
							gender={character.gender}
							origin={character.origin.name}
							image={character.image}
						></Card>
					);
				})}
			</div>
		</section>
	);
};

export function mapStateToProps(state) {
	return {
		favorites: state.favorites,
	};
}

export default connect(mapStateToProps)(Favorites);
