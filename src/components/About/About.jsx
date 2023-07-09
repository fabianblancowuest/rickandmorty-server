import styles from "./About.module.css"
import imagen from "../../assets/img/perfil_upscaled.png";
import linkedin from "../../assets/img/linkedIn-logo.png"
import instagram from "../../assets/img/instagram-logo.png"
import instagram2 from "../../assets/img/instagram-logo2.png"
import insta from "../../assets/img/insta.png"

const About = () => {

    return (<>
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.item2}>
                    <img src={imagen} className={styles.img}></img>
                </div>
                <div className={styles.info}>
                    <h2>Fabián Blanco Wuest</h2>
                    <h3>Programador Full-Stack</h3>
                    <h4>Formosa, Argentina</h4>
                    <h5>Apasionado de aprender nuevas tecnologías y superar desafíos</h5>
                    <ul className={styles.ul}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>SQL</li>
                    </ul>
                    {/* <img src={linkedin}><a href="https://www.linkedin.com/in/fabi%C3%A1n-blanco-wuest-04979b196/"></a></img> */}
                    <div className={styles.imgContainer}>
                        <a href="https://www.linkedin.com/in/fabi%C3%A1n-blanco-wuest-04979b196/" target="_blank" rel="noreferrer">
                            <img src={linkedin} title="Visita mi perfil en LinkedIn" className={styles.imgLink}></img>
                        </a>
                        <a href="https://www.instagram.com/fabianblancowuest"><img src={instagram2} className={styles.imgInsta}></img></a>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default About;