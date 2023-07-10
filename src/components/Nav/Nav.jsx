import SearchBar from "./SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

const Nav = (props) => {

    return (
        <div className={styles.div}>
            <div className={styles.homeAbout}>
                <Link to="/home">
                    <button className={styles.button}>Home</button>
                </Link>
                <Link to="/about">
                    <button className={styles.button}>About</button>
                </Link>
            </div>
            <div className={styles.nav}>
                <SearchBar onSearch={props.onSearch} handleCleanScreen={props.handleCleanScreen} />
            </div>
            <button className={styles.button} onClick={props.logout}>Logout</button>
        </div>
    )
}

export default Nav;