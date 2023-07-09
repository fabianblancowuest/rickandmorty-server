import SearchBar from "./SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";
// import { useState } from "react";

const Nav = (props) => {

    return (
        <div className={styles.div}>
            <Link to="/home">
                <button className={styles.button}>Home</button>
            </Link>
            <Link to="/about">
                <button className={styles.button}>About</button>
            </Link>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

export default Nav;