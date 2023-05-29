import picture from "../assets/picture.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import pictureRandom from "../assets/pictureRandom.jpg";
import styles from "./Presentation.module.css";

function Presentation() {
  return (
    <>
      <div className={styles.presentation} id="presentation">
        <div className={styles.aboutBlock}>
          <div className={styles.title}>
            <h1>Front-End Developer</h1>
            <h2>
              Hello, I'm Vanessa Giraud, front-end developer based in Lyon.
            </h2>

            <div className={styles.logoContainer}>
              <a href="https://www.linkedin.com/in/vanessagiraud/">
                <img
                  className={styles.logoLinkedin}
                  src={linkedin}
                  alt="logo-linkedin"
                />{" "}
              </a>
              <a href="https://github.com/VanessaGrd">
                <img
                  className={styles.logoGithub}
                  src={github}
                  alt="logo-linkedin"
                />
              </a>
            </div>
          </div>
          <figure className={styles.figure}>
            <img className={styles.picture} src={picture} alt="" />
          </figure>
        </div>
        <div className={styles.skills}>
          <p>Stack</p>
          <div className={styles.hardSkills}>
            <ul>
              <li>#HTML</li>
              <li>#CSS</li>
              <li>#Javascript</li>
              <li>#React</li>
              <li>#NodeJS</li>
              <li>#Express</li>
              <li>#MySQL</li>
            </ul>
          </div>
          <div className={styles.softSkills}>
            <ul>
              <li>#Esprit d'équipe</li>
              <li>#Créativité</li>
              <li>#Soif de connaissances</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
