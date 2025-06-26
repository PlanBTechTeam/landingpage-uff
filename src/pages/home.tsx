// 📦 Background e ícones
import background from "../assets/background.png";
import Projects from "../components/projects";
import { Footer } from "../components/footer";
import { About } from "../components/about";
import { TeamAbout } from "../components/teamAbout";
import { Nav } from "../components/nav";
import { Team } from "../components/team";
import { Header } from "../components/header";
import Publications from "../components/publications";
import { Events } from "../components/events";
import { DigitalTeachingMaterial } from "../components/DigitalTeachingMaterial";

function Home() {
  return (
    <main
      className="main flex flex-col gap-16"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "104%",
        // backgroundRepeat: "no-repeat"
      }}
    >
      <Header />
      <Nav />
      <TeamAbout />
      <Team />
      <About />
      <Projects />
      <Publications />
      <DigitalTeachingMaterial/>
      <Events />
      <Footer />
    </main>
  );
}

export default Home;
