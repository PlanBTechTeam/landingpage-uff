import content from '../data/content.json'

export const TeamAbout = () => {
  return (
    <section id='about'>
      <header>
        <h1 className='text-3xl font-bold'>
          {content.teamAbout.title}
        </h1>
      </header>
      <div className='bg-white p-8 py-8'>
        {content.teamAbout.description.map((d, i) => (
          <p key={d} className={`text-2xl ${i < content.teamAbout.description.length - 1 ? 'mb-4' : ''}`}>
            {d}
          </p>
        ))}
      </div>
    </section>
  )
}