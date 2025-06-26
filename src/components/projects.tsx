import { renderTextWithLinks } from "../utils/renderTextWithLinks";
import { ProjectsPhotos } from "../assets/projects";
import content from "../data/content.json"

function Projects() {
    return (
        <section id="projects">
            <header>
                <h1 className='text-3xl font-bold'>
                    Projetos
                </h1>
            </header>
            <div>
                {content.projects.map((p) => (
                    <div key={p.title} className="flex flex-col gap-6 p-8 bg-white">
                        <img src={ProjectsPhotos[p.photo as keyof typeof ProjectsPhotos]} alt="" className="w-1/2" />
                        <h1 className="text-center font-bold">{p.title ? p.title : ""}</h1>
                        {p.description.map((d) => (
                            <div key={d.paragraph}>
                                {renderTextWithLinks(d.paragraph)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;