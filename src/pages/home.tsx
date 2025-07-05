// 📦 Background e ícones
import background from "../assets/background-1.png";
import Projects from "../components/projects";
import { Footer } from "../components/footer";
import { About } from "../components/about";
import { TeamAbout } from "../components/teamAbout";
import { Nav } from "../components/nav";
import { Team } from "../components/team";
import { Header } from "../components/header";
import Publications from "../components/publications";
import { Events } from "../components/events";

function Home() {
  return (
    <main
      className="main flex flex-col gap-16"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
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
      <Events />
      <Footer />
    </main>
  );
}

export default Home;
