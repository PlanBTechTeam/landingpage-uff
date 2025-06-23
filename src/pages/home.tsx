// 📦 Background e ícones
import background from '../assets/background.png';
import Inicio from '../assets/inicio.png';
import Sobre from '../assets/sobre-o-grupo.png';
import Equipe from '../assets/equipe.png';
import Pesquisa from '../assets/linha-de-pesquisa.png';
import Projetos from '../assets/projetos.png';
import Publicacao from '../assets/publicacao.png';
import Materiais from '../assets/materiais-digitais.png';
import Eventos from '../assets/eventos.png';
import Common from '../assets/common.png'
import Logos from '../assets/logos.png'

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
import Projects from '../components/projects';

interface Person {
  name: string
  email: string
  photo: string
}

interface TeamSection {
  title: string;
  persons: Person[];
}

function Home() {
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

  const teamSections: TeamSection[] = [
    {
      title: "Pesquisadores e colaboradores",
      persons: [
        {
          name: "Andriene B. tacla(Cordenadora professora GHT ePPGH/UFF)",
          email: "",
          photo: AdrianeBTacla
        },
        {
          name: "Alexandre S.Moraes(Professor GHT e PPGH/UFF)",
          email: "",
          photo: AlexandreSMoraes
        },
        {
          name: "Beethoven Alvarez(Pesquisador Colaborador – LEC/UFF)",
          email: "",
          photo: BeethovenAlvarez
        },
        {
          name: "Camila Diogo(Pós-Doutoranda Sênior, PPGH/UFF)",
          email: "",
          photo: CamilaDiogo
        },
        {
          name: "Camila Guimarães Dantas(Pesquisadora Colaboradora)",
          email: "",
          photo: CamilaDantas
        },
        {
          name: "Elaine Pereira-Farrel(Pesquisadora Colaboradora)",
          email: "",
          photo: ElainePereira
        },
        {
          name: "Pedro Peixoto (Pesquisador Colaborador Professor LHIA/ PPGHC/UFRJ)",
          email: "",
          photo: PedroPeixoto
        },
        {
          name: "Thiago de Almeida Pires (Professor PPGH/UFF) ",
          email: "",
          photo: ThiagoPires
        }
      ]
    },
    {
      title: "Alunos - Doutorado",
      persons: [
        {
          name: "Thais R. dos Santos (Doutoranda Bolsista CNPq – PPGH/UFF)",
          email: "",
          photo: ThaisR
        },

      ]
    },
    {
      title: "Alunos - Mestrado",
      persons: [
        {
          name: "Ana Clara Neves (GraduandaBolsista IC FAPERJ História/UFF)",
          email: "",
          photo: AnaClaraNeves
        },
        {
          name: "Ana Julya M. Guimarães (Graduanda História/UFF) ",
          email: "",
          photo: AnaJulyaM
        },
        {
          name: "Daniel B. da Conceição Nascimento (Graduando, História/UFF)",
          email: "",
          photo: DanielB
        },
      ]
    }
  ]

  return (
    <main
      className="main flex flex-col gap-16"
      style={{
        backgroundImage: `url(${background})`,
        // backgroundRepeat:'no-re/peat',
        backgroundSize: 'contain',
      }}
    >
      {/* 🧠 Cabeçalho */}
      <section
        style={{
          backgroundColor: '#f5f5f5',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem' }}>
          Antiguidade e contemporaneidade em perspectiva
        </h1>
        <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
          Espaços, identidades e hibridismos em pesquisa desde 2010.
        </p>
      </section>

      {/* 🧭 Navegação */}
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
                  width: '50%',
                  height: '50%',
                }}
              >
                <h1
                  style={{
                    letterSpacing: '0.05em',
                    lineHeight: '18px',
                    fontSize: '15px',
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

      {/* Sobre o grupo */}
      <section className='px-32 '>
        <div className='bg-[#444444] w-1/5 h-28 flex items-end text-white pl-2 py-2'>
          <h1
            style={{
              letterSpacing: '0.05em',
              lineHeight: '18px',
              fontSize: '15px',
              fontWeight: 700,
            }}
          >
            Sobre o grupo
          </h1>
        </div>
        <div className='bg-white p-16 py-20'>
          <p>
            Criado em 2010, o Grupo de Pesquisa "Antiguidade e Contemporaneidade em perspectiva: Espaços, Identidades e Hibridismos" pertence ao NEREIDA (Núcleo de Representações e de Imagens da Antiguidade), que é vinculado ao GHT, ao IHT e ao PPGH da UFF.
          </p>
          <br />
          <p>
            Nosso trabalho privilegia a análise da materialidade, seja ela arqueológica ou digital, cotejando-a com documentação textual e visual. Temos particular interesse por abordagens de agenciamento e apropriações culturais, onde os estudos de consumo são centrais.
          </p>
          <br />
          <p>
            Nossas pesquisas têm se voltado para o estudo de processos de mobilidade e conectividade do mundo antigo, as transformações por eles promovidas, usos e discursos espaciais, a materialidade da morte, recepção e usos do passado, além de aplicações de TICs ao ensino e pesquisa em história antiga e arqueologia.
          </p>
        </div>
      </section>

      {/* EQUIPE */}
      <section className='flex flex-col items-start gap-32 min-h-screen'>
        <div className='ml-32 bg-[#444444] w-1/5 h-28 flex items-end text-white pl-2 py-2'>
          <h1
            style={{
              letterSpacing: '0.05em',
              lineHeight: '18px',
              fontSize: '15px',
              fontWeight: 700,
            }}
          >
            Equipe
          </h1>
        </div>

        {
          teamSections.map((team) => (
            <div key={team.title} className='w-full'>
              <div className="w-1/2 bg-[#444444] flex justify-end">
                <div className=" text-white inline-block px-4 py-2">
                  <h1 className="tracking-wide leading-[18px] text-[25px] font-bold">
                    {team.title}
                  </h1>
                </div>
              </div>

              {/* Grid de pessoas */}
              <div className="  py-8 flex justify-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-[1200px] px-4">
                  {team.persons.map((p) => (
                    <div key={p.name} className="flex  bg-[#444444] p-2">
                      <div className='flex flex-1 flex-col'>
                        <h2 className="flex-1 text-white w-3/4 ">{p.name}</h2>
                        <div className='flex items-center justify-between text-white'>
                          <a href={p.email}>email</a>
                          <a href="#">Lattes</a>
                        </div>
                      </div>
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="object-cover flex-1 "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
      </section>

      {/* Sobre o grupo */}
      <section className='px-32 '>
        <div className='bg-[#444444] w-1/5 h-28 flex items-end text-white pl-2 py-2'>
          <h1
            style={{
              letterSpacing: '0.05em',
              lineHeight: '18px',
              fontSize: '15px',
              fontWeight: 700,
            }}
          >
            Linhas de Pesquisa
          </h1>
        </div>
        <div className='bg-white p-16 py-20'>
          <p>
            1) Conectividade e transformações da Idade do Ferro Essa linha é dedicada às práticas e às transformações das sociedades da Idade do Ferro europeia. Nela, visamos analisar a construção de redes sociais a partir da perspectiva de uma Idade do Ferro conectada. Atentamos para as transformações culturais e socioeconômicas, a exemplo de processos de emaranhamento cultural, agenciamento, religiosidade e para a produção de desigualdades sociais.
          </p>
          <br />
          <p>
            2) Arqueologia Funerária Enveredando pela materialidade da morte, essa linha de pesquisa se dedica a analisar as práticas e tratamentos funerários nas sociedades pré-históricas e antigas, visando a compreensão dos relacionamentos entre os vivos e seus mortos, desigualdades e diferenciação social, representações da morte e construções de paisagens funerárias.
          </p>
          <br />
          <p>
            3) Contatos, Expansões e Urbanismos Antigos. Essa linha de pesquisa visa compreender e analisar a produção e as transformações de paisagens urbanas no mundo antigo, os usos e apropriação do espaço, o impacto cultural de processos de urbanização e averiguar como movimentos globalizantes e de expansão e conquistas fomentaram a produção de cidades com laços políticos e culturais, marcados em discursos arquitetônicos no ambiente construído. Assim, nos interessa sobretudo como fenômenos de monumentalização e ritualização da paisagem foram experienciados pelas populações migrantes, locais e das cidades de origem.
          </p>
          <br />
          <p>
            4) História, Arqueologia e Patrimônio Digital. Essa linha abrange a análise das aplicações de TICs aos ofícios do historiador e do arqueólogo, assim como o estudo de discursos históricos em mídias digitais (sobretudo jogos e XR). Os principais interesses dos pesquisadores do grupo têm sido sobre aplicações digitais para o ensino de história e divulgação científica, aplicações de tecnologias 3D (incluindo jogos e XR) para patrimônio cultural, cemitérios híbridos, memoriais digitais, IA e a produção da memória em arquivos digitais.
          </p>
          <br />
          <p>
            5) Recepção e Usos do Passado. Essa linha de pesquisa se debruça sobre as apropriações e representações de sociedades antigas pelos modernos e pela contemporaneidade. Os pesquisadores do grupo têm se interessado pelo discurso de antiquários e colecionadores, de jogos e XR e como índices culturais diversos da Antiguidade foram relidos e ressignificados em variadas representações visuais e literárias.
          </p>
        </div>
      </section>

      {/* Projetos */}
      <Projects />

      {/* Footer */}
      <footer >
        <div className="bg-[#4C4C4A] flex justify-center py-6">
          <img src={Logos} alt="Logo" className='w-1/2' />
        </div>
        <div
          className="flex items-center px-64 py-4  mx-auto"
          style={{ backgroundColor: "white" }}
        >
          <img src={Common} alt="Creative Commons" className="mr-4 size-16 object-contain" />
          <p className="text-gray-700 text-sm leading-relaxed">
            Todos os materiais e trabalhos aqui disponibilizados estão licenciados com uma Licença Creative Commons –
            Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional
            <br />
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://creativecommons.org/licenses/by-nc-sa/4.0/
            </a>
          </p>
        </div>
      </footer>

    </main>
  );
}

export default Home;
