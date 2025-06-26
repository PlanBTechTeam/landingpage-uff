import { PublicationsPhotos } from "../assets/publitacations";
import content from "../data/content.json";

const Publications = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10" id="publications">
      <header className="mb-6">
        <h1 className="text-3xl md:text-3xl font-bold text-center md:text-left">Publicações</h1>
      </header>

      <div className="flex flex-col gap-8">
        {content.publications.map((p) => (
          <div
            key={p.photo}
            className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded shadow-sm"
          >
            <img
              src={PublicationsPhotos[p.photo as keyof typeof PublicationsPhotos]}
              alt=""
              className="w-full md:w-64 h-auto object-cover rounded flex-shrink-0"
            />
            <div className="w-1/2  flex flex-col  gap-10 font-bold text-sm md:text-base ">
              {p.description.map((d) => (
                <div key={d.paragraph} className="break-words">
                  {d.paragraph}
                </div>
              ))}
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default Publications;
