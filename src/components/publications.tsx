import DicionarioTematicoDeArqueologiaFuneraria from '../assets/dicionario-tematico-de-arqueologia-funeraria.png'
import DicionarioConceitualDeCircuitosEInteracoesDaAntiguidade from '../assets/dicionario-conceitual-de-circuitos-e-Interações-da-antiguidade.png'
const Publications = () => {
    const publicationsList = [
        {
            photo: DicionarioTematicoDeArqueologiaFuneraria,
            description: [
                { paragraph: "DE SOUZA, C.D.; TACLA, A.B. (Orgs.) Dicionário Temático de Arqueologia Funerária. Belo Horizonte: Fino Traço, 2024." },
                { paragaph: "Ebook: https://www.finotracoeditora.com.br/ebook-dicionario-de-arqueologia-funeraria" },
                { paragraph: "Impresso: https://www.finotracoeditora.com.br/dicionario-de-arqueologia-funeraria" },
                { paragraph: "Financiamento: FAPERJ" }
            ]
        },
        {
            photo: DicionarioConceitualDeCircuitosEInteracoesDaAntiguidade,
            description: [
                { paragraph: "TACLA, A.B. et al. (Org.) Dicionário Conceitual de Circuitos e Interações da Antiguidade. Belo Horizonte: Fino Traço, 2024." },
                { paragaph: "Ebook: https://www.finotracoeditora.com.br/e-book-dicionario-conceitual-de-circuitos-e-interacoes-da-antiguidade" },
                { paragraph: "Impresso: https://www.finotracoeditora.com.br/dicionario-conceitual-de-circuitos-e-interacoes-da-antiguidade" },
                { paragraph: "Financiamento: FAPERJ" }
            ]
        }
    ]
    return (
        <section>
            <header>
                <h1>
                    Publicações
                </h1>
            </header>
            <div>
                {publicationsList.map((p) => (
                    <div key={p.photo} className="flex  gap-6 p-8 bg-white font-bold">
                        <img src={p.photo} alt="" />
                        <div className='flex-1 flex flex-col'>
                            {p.description.map((d) => (
                                <div key={d.paragraph} className=''>
                                    {d.paragraph}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Publications;