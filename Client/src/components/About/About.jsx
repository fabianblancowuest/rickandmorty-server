import styles from "./About.module.css"
import imagen from "../../assets/img/perfil_upscaled.png";
import linkedin from "../../assets/img/linkedIn-logo.png"
import github from "../../assets/img/GitHub-logo.png"

const technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "SQL"];
const showTechs = technologies.map(item => <li key={item}>{item}</li>);

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
                        {showTechs}
                    </ul>
                    <div className={styles.imgContainer}>
                        <a href="https://www.linkedin.com/in/fabi%C3%A1n-blanco-wuest-04979b196/" target="_blank" rel="noreferrer">
                            <img src={linkedin} title="Visita mi perfil en LinkedIn" className={styles.imgLink}></img>
                        </a>
                        <a href="https://github.com/fabianblancowuest" target="_blank" rel="noreferrer"><img src={github} className={styles.githubImg}></img></a>
                        {/* <a href="https://www.instagram.com/fabianblancowuest" target="_blank" rel="noreferrer"><img src={instagram} className={styles.imgInsta}></img></a> */}
                    </div>
                    {/* <div className={styles.rickInfo}>
                        <span className={styles.spanRick}>¡Hello Alien!</span>
                    </div> */}
                </div>
            </div>
        </div>

    </>)
}

export default About;