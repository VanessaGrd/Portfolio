import projet1 from "../assets/projet1.png";
import projet2 from "../assets/projet2.png";
import projet3 from "../assets/projet3.png";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsContainer}>
        <h3>Projects</h3>
        <div className={styles.projectsBox}>
          <div className={styles.projects1and2}>
            <div className={styles.project}>
              <img src={projet1} alt="projet1" />

              <div className={styles.overlay}>
                <div className={styles.overlayText}>
                  <h2>WILDKED'IN</h2>
                  <p>
                    Educational project in groups of 4.<br></br>
                    <br></br>
                    WCS student portfolio for recruiters which can filter based
                    on hardskills and softskills sought. <br></br> <br></br>
                    Technologies used : <br></br>
                    HTML, CSS, JavaScript, Git/Github, Figma, Trello.
                    <br />
                    <br />
                    <a href="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WeWildin/">
                      <span>See more...</span>{" "}
                    </a>
                  </p>{" "}
                </div>
              </div>
            </div>
            <div className={styles.project}>
              <img src={projet2} alt="projet2" />
              <div className={styles.overlay}>
                <div className={styles.overlayText}>
                  <a href="https://daily-expat.netlify.app/">
                    <h2>DAILY EXPAT</h2>
                    <p>
                      Educational project in groups of 4.<br></br>
                      <br></br>
                      Site for expatriates who wish to reconnect with their
                      country of origin.
                      <br></br> They can find images, music, recipes and news
                      from their country. <br></br> <br></br>
                      Technologies used:<br></br> HTML, CSS, React, JavaScript,
                      API, NodeJS, Git/Github, Figma, Trello.
                      <br />
                      <br />
                      <a href="https://daily-expat.netlify.app/">
                        <span>See more...</span>
                      </a>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project3}>
            <img src={projet3} alt="projet3" />
            <div className={styles.overlayP3}>
              <div className={styles.overlayText}>
                <h2>APPLE VOLUNTEERS</h2>
                <p>
                Group project of 3, carried out in 24 hours during a hackathon. .                  <br></br>
                  <br></br>Site of an association which proposes to reserve
                   free tours of New York, depending on the neighborhoods
                   chosen by the tourist and available volunteers. <br />
                  <br />
                  Technologies used : <br /> HTML, CSS, React, JavaScript, API,
                  NodeJS, Git/Github, Figma, Trello.<br></br>
                  <br></br>
                  <a href="">
                    {" "}
                    <span>Deployment in progress...</span>{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
