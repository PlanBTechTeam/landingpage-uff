import { PhotoEvents } from '@photoEvents/index';
import content from "../data/content.json";

export const Events = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-10" id='events'>
      <header>
        <h1 className="text-4xl font-bold">Eventos</h1>
      </header>

      <div className="flex flex-col gap-12 mt-10">
  {content.events.slice().reverse().map((e) => (
    <div key={e.year}>
      <div className="flex sm:flex-wrap gap-6 sm:justify-start items-start overflow-x-auto sm:overflow-visible scrollbar-hide">
        {/* Card do Ano */}
        <div className="flex-shrink-0 w-[200px] h-[265px] bg-[#444444] text-white flex items-center justify-center text-3xl font-bold rounded shadow-md">
          {e.year}
        </div>

        {/* Cards de eventos */}
        {e.events.map((ev, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[200px] h-[265px] bg-white/90 shadow-lg rounded overflow-hidden"
          >
            <img
              src={PhotoEvents[ev.photo as keyof typeof PhotoEvents]}
              alt={`Evento ${e.year}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    </section>
  );
};
