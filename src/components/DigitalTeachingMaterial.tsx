import { ProjectsPhotos } from "../assets/projects";
import content from "../data/content.json"

export const DigitalTeachingMaterial = () => {
    return (
        <section id="digital-material">
            <header>
            <h1 className='text-2xl font-bold'>
                    Material Didático Digita
                </h1>
            </header>
            <div>
            {content.DigitalTeachingMaterial.map((p) => (
                    <div key={p.photo} className="flex flex-col gap-6 p-8 bg-white font-bold ">
                        <img src={ProjectsPhotos[p.photo as keyof typeof ProjectsPhotos]} alt="" className="w-1/2" />
                        {p.description.map((d) => (
                            <div key={d.paragraph}>
                                {d.paragraph}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}