import { PhotoEvents } from '@photoEvents/index'

export const Events = () => {
    const eventsList = [
        {
            year: "2011",
            events: [
                { photo: PhotoEvents.StockHammer }
            ]
        },
        {
            year: "2012",
            events: [
                { photo: PhotoEvents.Simposio }
            ]
        },
        {
            year: "2013",
            events: [
                { photo: PhotoEvents.Colombani },
                { photo: PhotoEvents.Hirota },
                { photo: PhotoEvents.Vasques }
            ]
        },
        {
            year: "2014",
            events: [
                { photo: PhotoEvents.Adriana }
            ]
        },
        {
            year: "2015",
            events: [
                { photo: PhotoEvents.CursoMedieval },
                { photo: PhotoEvents.OficinaTech },
            ]
        },
        {
            year: "2016",
            events: [
                { photo: PhotoEvents.EcontroGtha }
            ]
        },
        {
            year: "2017",
            events: [
                { photo: PhotoEvents.Realidade }
            ]
        },
        {
            year: "2018",
            events: [
                { photo: PhotoEvents.Coloquio },
                { photo: PhotoEvents.Moedas },
                { photo: PhotoEvents.Coins }
            ]
        },
        {
            year: "2019",
            events: [
                { photo: PhotoEvents.Coins },
                { photo: PhotoEvents.OficinaTreinamentoEmEpidoc },
                { photo: PhotoEvents.Uff },
                { photo: PhotoEvents.Parsas },
                { photo: PhotoEvents.MaterialidadesExMachina },
                { photo: PhotoEvents.Virtual }
            ]
        },
        {
            year: "2020",
            events: [
                { photo: PhotoEvents.Joias },
                { photo: PhotoEvents.Doencas },
                { photo: PhotoEvents.Estudos },
                { photo: PhotoEvents.MiniCursos }
            ]
        },
        {
            year: "2023",
            events: [
                { photo: PhotoEvents.Circuitos }
            ]
        },
        {
            year: "2024",
            events: [
                { photo: PhotoEvents.Porto },
                { photo: PhotoEvents.Conferencia },
                { photo: PhotoEvents.Remotra },
                { photo: PhotoEvents.ParaAlem },
                { photo: PhotoEvents.Alceste },
                { photo: PhotoEvents.AMorte },
                { photo: PhotoEvents.Parir },
                { photo: PhotoEvents.Andando },
                { photo: PhotoEvents.Desigualdade },
                { photo: PhotoEvents.Hibrid },
                { photo: PhotoEvents.Alumbramientos }
            ]
        },
    ]

    return (
        <section>
            <header>
                <h1>Eventos</h1>
            </header>

            <div className='flex flex-col gap-12 mt-10'>
                {eventsList.slice().reverse().map((e) => (
                    <div key={e.year} className=''>
                        <h2 className='flex-1 text-white text-lg font-semibold mb-4 bg-[#444444] px-4 py-2 inline-block rounded'>
                            {e.year}
                        </h2>
                        <div className="flex flex-wrap gap-6 justify-start items-start">
                            {e.events.map((ev, index) => (
                                <div
                                    key={index}
                                    className="w-[200px] h-auto bg-white/90 shadow-lg rounded overflow-hidden"
                                >
                                    <img
                                        src={ev.photo}
                                        alt={`Evento ${e.year}`}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>

    )
}
