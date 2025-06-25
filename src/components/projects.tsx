import CircuitoImage from "../assets/circuitos-de-informacao-na-antiguidade.jpg"
import DeMoedasEReias from "../assets/de-moedas-e-reis.jpg"
function Projects() {
    const projectsList = [
        {
            title: "Circuitos de informação: visões de experimentação comparada da Antiguidade",
            description: [
                { paragraph: "Partindo de uma perspectiva multidisciplinar, envolvendo historiadores, arqueólogos e linguistas, o presente projeto vem propor o estudo de experiências comparadas dos circuitos de comunicação entre helenos e as sociedades ditas “bárbaras”. " },
                { paragraph: "Trabalhando com um recorte de longa duração, estaremos analisando a mobilidade de pessoas, artefatos e ideias e suas apropriações para a construção de experiências locais. Seguindo a abordagem pós-colonial e os estudos da materialidade e de autoria, buscamos aprofundar a reflexão acerca do agenciamento humano nos processos de contato e comunicação entre helenos e as populações locais de contextos coloniais. " },
                { paragraph: "Essa proposta visa o emprego de Tecnologias da Informação e Comunicação (TICs) tanto para a pesquisa (com técnicas de fotografia computacional para digitalização de cultura material e de linguística de corpora para análise textual), quanto para o Ensino de História Antiga. Vale destacar que uma das finalidades desse projeto é a produção de material de divulgação científica e para a educação básica em formato digital e em impresso, a serem elaborados em colaboração com escolas públicas do Estado do RJ." },
                { paragraph: "Equipe: Adriene Baron Tacla, Camila Diogo de Souza, Beethoven Alvarez, Alexandre Carneiro Cerqueira Lima, Alexandre Santos de Moraes" },
                { paragraph: "Período: 2020-2025" },
                { paragraph: "Financiamento: FAPERJ" }
            ],
            photo: CircuitoImage,
        },
        {
            description: [
                { paragraph: "https://ofcoinsandkings.exeter.ac.uk/ " },
                { paragraph: "https://ofcoinsandkings.exeter.ac.uk/ " },
            ],
            photo: DeMoedasEReias,
        }
    ]

    return (
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
                    Projetos
                </h1>
            </div>
            <div>
                {projectsList.map((p) => (
                    <div key={p.title} className="flex flex-col gap-6 p-8 bg-white font-bold">
                        <img src={p.photo} alt="" className="w-1/2" />
                        <h1 className="text-center">{p.title ? p.title : ""}</h1>
                        {p.description.map((d)=>(
                            <div key={d.paragraph}>
                                {d.paragraph}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;