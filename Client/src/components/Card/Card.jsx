import React from "react";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";

function Card({ onClose, name, status, species, gender, origin, image, id }) {
   return (
      <div className={styles.card}>
         <button className={styles.btn} onClick={() => { onClose(id) }}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className={styles.title}>{name}</h2>
            <img className={styles.img} src={image} alt={name} />
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </Link>
      </div>
   );
}

export default Card;