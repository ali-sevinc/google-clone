import ImageResultsItem from "./ImageResultsItem";

type ResultType = {
  title: string;
  htmlTitle: string;
  displayLink: string;
  link: string;
  image: { thumbnailLink: string; contextLink: string };
};
export default function SearchImageResults({
  results,
}: {
  results: ResultType[];
}) {
  return (
    <div className="pb-28 mt-4 ">
      <ul className="grid mx-4 gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {results.map((item) => (
          <ImageResultsItem key={item.link} result={item} />
        ))}
      </ul>
    </div>
  );
}

/*
 {
    kind: 'customsearch#result',
    title: 'The dangers of percolating | by Dan McCarthy | drmstream | Medium',
    htmlTitle: 'The dangers of <b>percolating</b> | by Dan McCarthy | drmstream | Medium',
    link: 'https://miro.medium.com/v2/resize:fit:600/0*ytPvaRD3rxhOwNGd.jpg',
    displayLink: 'medium.com',
    snippet: 'The dangers of percolating | by Dan McCarthy | drmstream | Medium',
    htmlSnippet: 'The dangers of <b>percolating</b> | by Dan McCarthy | drmstream | Medium',
    mime: 'image/jpeg',
    fileFormat: 'image/jpeg',
    image: {
      contextLink: 'https://medium.com/drmstream/the-dangers-of-percolating-684288278e1',
      height: 508,
      width: 600,
      byteSize: 35318,
      thumbnailLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTTVNtSKahDMKtcii_LS8OWhgl4HLVW4kdh9Nmr39BJ9qXTJq29QCyC4&s',
      thumbnailHeight: 114,
      thumbnailWidth: 135
    }


*/
