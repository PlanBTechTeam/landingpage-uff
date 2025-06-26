import content from '../data/content.json';

export const Header = () => {
  const titleWords = content.header.title.split(" ")
  const lastWord = titleWords.pop();
  const penultimateWord = titleWords.pop();
  const firstWords = titleWords.join(" ");
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-10 bg-[#f5f5f5] text-center max-w-full">
      <h1 className="palatino text-center leading-[1.1] text-[clamp(2rem,6vw,4rem)] break-words max-w-full ">
        <span className="palatino">{firstWords} </span>
        <span className="foster">{penultimateWord} {lastWord}</span>
      </h1>

      <p
        className="calibri mt-4 text-center max-w-full"
        style={{
          fontWeight: 200,
          fontSize: "clamp(1.2rem, 4vw, 3.2rem)",
          lineHeight: "1.1",
          letterSpacing: "0",
          overflowWrap: "break-word",
          wordWrap: "break-word",
        }}
      >
        {content.header.subTitle}
      </p>
    </section>

  );
};


