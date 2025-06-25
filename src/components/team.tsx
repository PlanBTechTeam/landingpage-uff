import AdrianeBTacla from '../assets/adriane-b-tacla.png'
import AlexandreSMoraes from '../assets/alexandre-s-moraes.png'
import BeethovenAlvarez from '../assets/beethoven-alvarez.png'
import CamilaDiogo from '../assets/camila-diogo.png'
import CamilaDantas from '../assets/camila-guimaraes.png'
import ElainePereira from '../assets/elaine-pereira.png'
import PedroPeixoto from '../assets/pedro-peixoto.png'
import ThiagoPires from '../assets/thiago-de-almeida.png'
import ThaisR from '../assets/thais-r.png'
import AnaClaraNeves from '../assets/ana-clana-neves.png'
import AnaJulyaM from '../assets/ana-julya-m.png'
import DanielB from '../assets/daniel-b.png'
import BrunnoAraujo from '../assets/brunno-araujo.png'
import EllenMoura from '../assets/ellen-moura.png'
import ViniciusCunhaDaSilva from '../assets/vinicius-cunha-da-silva.png'

export const Team = () => {
  interface Person {
    name: string
    email: string
    photo: string
  }

  interface TeamSection {
    title: string;
    persons: Person[];
  }

  const teamSections: TeamSection[] = [
    {
      title: "Pesquisadores e colaboradores",
      persons: [
        {
          name: "Andriene B. tacla(Cordenadora professora GHT ePPGH/UFF)",
          email: "",
          photo: AdrianeBTacla,
        },
        {
          name: "Alexandre S.Moraes(Professor GHT e PPGH/UFF)",
          email: "",
          photo: AlexandreSMoraes,
        },
        {
          name: "Beethoven Alvarez(Pesquisador Colaborador – LEC/UFF)",
          email: "",
          photo: BeethovenAlvarez,
        },
        {
          name: "Brunno Araujo (Pesquisador Colaborador – Professor CPII Realengo)",
          email: "",
          photo: BrunnoAraujo
        },
        {
          name: "Camila Diogo(Pós-Doutoranda Sênior, PPGH/UFF)",
          email: "",
          photo: CamilaDiogo,
        },
        {
          name: "Camila Guimarães Dantas(Pesquisadora Colaboradora)",
          email: "",
          photo: CamilaDantas,
        },
        {
          name: "Elaine Pereira-Farrel(Pesquisadora Colaboradora)",
          email: "",
          photo: ElainePereira,
        },
        {
          name: "Ellen Moura T.de Vasconcelos (Pesquisadora Colaboradora)",
          email: "",
          photo: EllenMoura
        },
        {
          name: "Pedro Peixoto (Pesquisador Colaborador Professor LHIA/ PPGHC/UFRJ)",
          email: "",
          photo: PedroPeixoto,
        },
        {
          name: "Thiago de Almeida Pires (Professor PPGH/UFF)",
          email: "",
          photo: ThiagoPires,
        },
      ],
    },
    {
      title: "Alunos - Doutorado",
      persons: [
        {
          name: "Thais R. dos Santos (Doutoranda Bolsista CNPq – PPGH/UFF)",
          email: "",
          photo: ThaisR,
        },
      ],
    },
    {
      title: "Alunos - Mestrado",
      persons: [
        {
          name: "Ana Clara Neves (GraduandaBolsista IC FAPERJ História/UFF)",
          email: "",
          photo: AnaClaraNeves,
        },
        {
          name: "Ana Julya M. Guimarães (Graduanda História/UFF) ",
          email: "",
          photo: AnaJulyaM,
        },
        {
          name: "Daniel B. da Conceição Nascimento (Graduando, História/UFF)",
          email: "",
          photo: DanielB,
        },
        {
          name: "Vinicius Cunha da Silva (Graduando Bolsista IT FAPERJ História/UFF)",
          email: "",
          photo: ViniciusCunhaDaSilva
        }
      ],
    },
  ];
  return (
    <section className="flex flex-col items-start gap-32 min-h-screen">
      <div className="ml-32 bg-[#444444] w-1/5 h-28 flex items-end text-white pl-2 py-2">
        <h1
          style={{
            letterSpacing: "0.05em",
            lineHeight: "18px",
            fontSize: "15px",
            fontWeight: 700,
          }}
        >
          Equipe
        </h1>
      </div>
      {teamSections.map((team) => (
        <div key={team.title} className="w-full">
          <div className="w-1/2 bg-[#444444] flex justify-end">
            <div className=" text-white inline-block px-4 py-2">
              <h1 className="tracking-wide leading-[18px] text-[25px] font-bold">
                {team.title}
              </h1>
            </div>
          </div>

          {/* Grid de pessoas */}
          <div className="  py-8 flex justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-full max-w-[1400px] px-4">              {team.persons.map((p) => (
              <div key={p.name} className="flex gap-2  bg-[#444444] p-2">
                <div className="flex flex-1 flex-col">
                  <h2 className="flex-1 text-white w-3/4 ">{p.name}</h2>
                  <div className="flex items-center justify-between text-white">
                    <a href={p.email}>email</a>
                    <a href="#">Lattes</a>
                  </div>
                </div>
                <img
                  src={p.photo}
                  alt={p.name}
                  className="object-cover flex-1"
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
