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
      <a
  href="#"
  className="fixed bottom-4 right-4 p-3 bg-[#444444] rounded-full text-white opacity-70 hover:opacity-100 transition"
  aria-label="Voltar ao menu"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 15l7-7 7 7"
    />
  </svg>
</a>


      <Footer />
    </main>
  );
}

export default Home;
