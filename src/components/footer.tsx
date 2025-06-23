import Common from '../assets/common.png'
import Logos from '../assets/logos.png'

export const Footer = () => {
  return(
    <footer >
        <div className="bg-[#4C4C4A] flex justify-center py-6">
          <img src={Logos} alt="Logo" className='w-1/2' />
        </div>
        <div
          className="flex items-center px-64 py-4  mx-auto"
          style={{ backgroundColor: "white" }}
        >
          <img src={Common} alt="Creative Commons" className="mr-4 size-16 object-contain" />
          <p className="text-gray-700 text-sm leading-relaxed">
            Todos os materiais e trabalhos aqui disponibilizados estão licenciados com uma Licença Creative Commons –
            Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional
            <br />
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://creativecommons.org/licenses/by-nc-sa/4.0/
            </a>
          </p>
        </div>
      </footer>
  )
}