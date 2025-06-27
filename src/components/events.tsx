import { PhotoEvents } from '@photoEvents/index';
import content from "../data/content.json";
import { useState } from 'react';

export const Events = () => {
  const [modal, setModal] = useState<string | null>(null);

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
                  className="flex-shrink-0 w-[200px] h-[265px] bg-white/90 shadow-lg rounded overflow-hidden cursor-pointer"
                  onClick={() => ev.description && setModal(ev.description)}
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

      {/* Modal Suave */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition duration-300"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white/90 max-w-lg w-full mx-4 sm:mx-0 p-6 rounded-xl shadow-2xl border border-gray-300 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-base sm:text-lg text-gray-800 whitespace-pre-line">{modal}</p>
            <button
              className="mt-6 px-4 py-2 text-sm bg-[#444] text-white rounded hover:bg-[#333] transition"
              onClick={() => setModal(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
