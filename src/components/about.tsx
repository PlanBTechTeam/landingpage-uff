import content from '../data/content.json'

export const About = () => {
  return (
    <section id='search-about'>
      <header>
        <h1 className='text-3xl font-bold' style={{lineHeight: .9}}>
          {content.about.title}
        </h1>
      </header>
      <div className='bg-white p-8 py-8'>
        {content.about.description.map((d, i) => (
          <div key={d.title} className={`flex flex-col gap-2 ${i < content.about.description.length - 1 ? 'mb-4' : ''}`}>
            <h2 className='font-bold'>
              {d.title}
            </h2>
            <p className='font-[200]'>
              {d.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}