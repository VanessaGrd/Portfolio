import styles from "./HomePage.module.css";
import Projects from "./Projects";
import Presentation from "./Presentation";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";

function HomePage() {
  return (
    <>
      <body>
        <Navbar />
        <Presentation />
        <About />
        <Projects />
        <Contact />
      </body>
    </>
  );
}

export default HomePage;
