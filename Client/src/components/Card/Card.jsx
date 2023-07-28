import React, { useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import { connect } from "react-redux";

function Card({
	onClose,
	name,
	status,
	species,
	gender,
	origin,
	image,
	id,
	location,
	removeFavorites,
	addFavorite,
}) {
	const { isFav, setIsFav } = useState(false);
	function handleClick() {
		if (isFav) {
			setIsFav(false);
			removeFavorites(id);
		} else {
			setIsFav(true);
			addFavorite({
				onClose,
				name,
				status,
				species,
				gender,
				origin,
				image,
				id,
				location,
			});
		}
		// despachar el objeto de la acción
	}
	return (
		<div className={styles.card}>
			<button
				className={styles.btn}
				onClick={() => {
					onClose(id);
				}}
			>
				x
			</button>
			<Link to={`/detail/${id}`}>
				<h2 className={styles.title}>{name}</h2>
				<img className={styles.img} src={image} alt={name} />
				<h2>{species}</h2>
				<h2>{gender}</h2>
			</Link>
			{isFav ? (
				<button onClick={addFavorite}>🧡</button>
			) : (
				<button onClick={handleClick}>🤍</button>
			)}
		</div>
	);
}

export function mapDispatchToProp(dispatch) {
	return {
		addFavorite: function (character) {
			dispatch(addFavorite(character));
		},
		removeFavorites: function (id) {
			dispatch(deleteFavorite(id));
		},
	};
}

// export default Card;
export default connect(null, mapDispatchToProp)(Card);
