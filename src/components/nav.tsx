import Inicio from "../assets/inicio.png";
import Sobre from "../assets/sobre-o-grupo.png";
import Equipe from "../assets/equipe.png";
import Pesquisa from "../assets/linha-de-pesquisa.png";
import Projetos from "../assets/projetos.png";
import Publicacao from "../assets/publicacao.png";
import Materiais from "../assets/materiais-digitais.png";
import Eventos from "../assets/eventos.png";

export const Nav = () => {
  const navbar = [
    { title: "Início", img: Inicio },
    { title: "Sobre o grupo", img: Sobre },
    { title: "Equipe", img: Equipe },
    { title: "Linha de Pesquisa", img: Pesquisa },
    { title: "Projetos", img: Projetos },
    { title: "Publicação", img: Publicacao },
    { title: "Materiais Digitais", img: Materiais },
    { title: "Eventos", img: Eventos },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-60">
        {navbar.map((item) => (
          <div key={item.title} className="relative  cursor-pointer">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover rounded"
            />
            <div
              className="absolute top-0 left-0 bg-[#444444] text-white flex items-end justify-start pl-2 py-2"
              style={{
                width: "50%",
                height: "50%",
              }}
            >
              <h1
                style={{
                  letterSpacing: "0.05em",
                  lineHeight: "18px",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
