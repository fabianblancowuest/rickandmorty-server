import SearchBar from "./SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

const Nav = (props) => {
    // const [scrollActive, setScrollActive] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         if (scrollPosition > 0) {
    //             setScrollActive(true);
    //         } else {
    //             setScrollActive(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


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
        </div>
    )
}

export default Nav;