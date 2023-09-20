import SearchBar from "./SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import navImg from "../../assets/img/backgrounds/navImg.png";
// import { useState, useEffect } from "react";

const Nav = (props) => {
	return (
		<div className={styles.navContainer}>
			<div className={styles.homeAbout}>
				<NavLink
					to="/home"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.navLink
					}
				>
					<button className={styles.button}>Home</button>
				</NavLink>
				<NavLink
					to="/favorites"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.navLink
					}
				>
					<button className={styles.button}>Favorites</button>
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.navLink
					}
				>
					<button className={styles.button}>About</button>
				</NavLink>
				<img src={navImg} className={styles.navImg}></img>
			</div>
			<div className={styles.nav}>
				<SearchBar />
			</div>
			<button className={styles.button} onClick={props.logout}>
				Logout
			</button>
		</div>
	);
};

export default Nav;
