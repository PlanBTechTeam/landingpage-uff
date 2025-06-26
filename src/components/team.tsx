import { PeaplePhotos } from "../assets/peaple";
import content from "../data/content.json"

export const Team = () => {
  return (
    <section className=" flex flex-col gap-10 " id='team' style={{paddingInline: 0}}>
      <div style={{paddingInline: 32}}>
        <header>
          <h1 className='text-3xl font-bold'>
            Equipe
          </h1>
        </header>
      </div>
      {content.teamSection.map((team) => (
        <div key={team.title} className="w-full">
          {/* Barra de título */}
          <div className="w-full sm:w-1/2 bg-[#444444] flex justify-center sm:justify-start">
            <div className="text-white px-24 py-6">
              <h1 className="tracking-wide leading-[18px] text-2xl sm:text-3xl font-bold  sm:text-right">
                {team.title}
              </h1>
            </div>
          </div>

          {/* Grid de pessoas */}
          <div className="  py-8 flex justify-center " style={{paddingInline: 32}}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-full  px-4">
              {team.persons.map((p) => (
                <div key={p.name} className="flex gap-2  bg-[#444444] p-2">
                  <div className="flex flex-1 flex-col">
                    <h2 className="flex-1 text-white  ">{p.name}</h2>
                    <div className="flex items-center justify-between text-white">
                      <a href={p.email}>email</a>
                      <a href="#">Lattes</a>
                    </div>
                  </div>
                  <div className="flex flex-1">

                    <img
                      src={PeaplePhotos[p.photo as keyof typeof PeaplePhotos]}
                      alt={p.name}
                      className="object-cover flex-1"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
