// 📦 Background e ícones
import background from "../assets/background.png";
import Projects from "../components/projects";
import { Footer } from "../components/footer";
import { About } from "../components/about";
import { TeamAbout } from "../components/teamAbout";
import { Nav } from "../components/nav";
import { Team } from "../components/team";
import { Header } from "../components/header";

function Home() {
  return (
    <main
      className="main flex flex-col gap-16"
      style={{
        backgroundImage: `url(${background})`,
        // backgroundRepeat:'no-re/peat',
        backgroundSize: "contain",
      }}
    >
      {/* 🧠 Cabeçalho */}
      <Header />
      {/* 🧭 Navegação */}
      <Nav />
      {/* Sobre o grupo */}
      <TeamAbout />
      {/* EQUIPE */}
      <Team />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default Home;
