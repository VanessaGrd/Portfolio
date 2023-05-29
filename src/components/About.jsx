import styles from "./About.module.css";
import pictureRandom from "../assets/pictureRandom.jpg"
function About() {
    
    return(
        <section className={styles.about} id="about">

  <div className={styles.aboutContainer}>
    <img src={pictureRandom} alt="pictureRandom" />
    <div className={styles.aboutText}>
      <h3>About me</h3>
      <p>
      After 15 years in the medical field, I am moving towards a job that has always attracted me, web developer! 👩🏼‍💻<br />
        <br />
        It was the implementation and configuration of an imaging appointment software that confirmed my choice to embark on development. <br />
        <br />
        <span>Now fully fulfilled in this new direction, I am looking for a company that will allow me to express my creativity and share a good team spirit.</span>
      </p>
    </div>
  </div>
  </section>)
}
export default About