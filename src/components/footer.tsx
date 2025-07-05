import Common from '../assets/common.png';
import Logos from '../assets/logo/logos.png';

export const Footer = () => {
  return (
    <footer>
      {/* Logos (UFF etc.) */}
      <div className="bg-[#4C4C4A] flex justify-center py-6 px-4">
        <img src={Logos} alt="Logo" className=" object-contain" />
      </div>

      {/* Creative Commons */}
      <div
        className="flex flex-col sm:flex-row items-center gap-4 px-4 sm:px-6 md:px-10 py-6 bg-white text-center sm:text-left"
      >
        <img
          src={Common}
          alt="Creative Commons"
          className="w-16 h-16 object-contain mx-auto sm:mx-0"
        />
        <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
          Todos os materiais e trabalhos aqui disponibilizados estão licenciados com uma Licença Creative Commons –
          Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional
          <br />
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-all"
          >
            https://creativecommons.org/licenses/by-nc-sa/4.0/
          </a>
        </p>
      </div>
    </footer>
  );
};
