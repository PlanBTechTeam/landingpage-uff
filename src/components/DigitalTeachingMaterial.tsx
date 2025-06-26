import { ProjectsPhotos } from "../assets/projects";
import content from "../data/content.json";

export const DigitalTeachingMaterial = () => {
  return (
    <section id="digital-material" className="px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <header>
        <h1 className="text-2xl font-bold mb-6">Material Didático Digital</h1>
      </header>
      <div className="flex flex-col gap-8">
        {content.DigitalTeachingMaterial.map((p) => (
          <div
            key={p.photo}
            className="flex flex-col md:flex-row gap-6 p-6 bg-white font-bold rounded shadow"
          >
            <img
              src={ProjectsPhotos[p.photo as keyof typeof ProjectsPhotos]}
              alt=""
              className="w-full md:w-1/2 h-auto object-cover rounded"
            />
            <div className="flex-1">
              {p.description.map((d) => (
                <div key={d.paragraph} className="text-base md:text-lg">
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
