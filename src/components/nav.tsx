import content from '../data/content.json';
import { NavPhotos } from '../assets/nav/';

export const Nav = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {content.nav.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="relative group cursor-pointer rounded overflow-hidden"
            >
              <img
                src={NavPhotos[item.img as keyof typeof NavPhotos]}
                alt={item.title}
                className="w-full  object-cover"
              />
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#444444] bg-opacity-90 text-white flex items-end justify-start p-3">
                <h1 className="text-xl sm:text-3xl font-bold leading-tight tracking-wide">
                  {item.title}
                </h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
