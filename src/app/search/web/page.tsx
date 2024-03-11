import SearchWebResults from "@/components/search/SearchWebResults";

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

export type ResultsType = {
  searchInformation: {
    formattedSearchTime: string;
    formattedTotalResults: string;
  };
  items: {
    title: string;
    link: string;
    displayLink: string;
    htmlSnippet: string;
    pagemap: { cse_thumbnail: { src: string }[] };
  }[];
};

export default async function Web({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) {
  const query = searchParams.searchTerm;
  const data = await searchInWeb(query);

  if (!data?.items?.length) {
    return (
      <div className="mt-12 ml-4 lg:ml-32">
        <h2 className="text-lg">
          Your search - <b>{query}</b> - did not match any documents.
        </h2>
        <p>Suggestions:</p>
        <ul className="list-disc pl-4">
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
        </ul>
      </div>
    );
  }

  return <SearchWebResults results={data} />;
}

async function searchInWeb(query: string) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`
  );
  if (!res.ok) throw new Error("An error occured.");
  const data = await res.json();
  // console.log(data);

  return data as ResultsType;
}

/*
queries: { request: [ [Object] ], nextPage: [ [Object] ] },
context: { title: 'go-clone' },
searchInformation: {
    searchTime: 0.29606,
    formattedSearchTime: '0.30',
    totalResults: '8350000',
    formattedTotalResults: '8,350,000'
  },
items: [    
    {
      kind: 'customsearch#result',
      title: 'Comped Definition & Meaning - Merriam-Webster',
      htmlTitle: '<b>Comped</b> Definition &amp; Meaning - Merriam-Webster',
      link: 'https://www.merriam-webster.com/dictionary/comped',
      displayLink: 'www.merriam-webster.com',
      snippet: 'The meaning of COMPED is provided free of charge : complimentary. How to use comped in a sentence.',    
      htmlSnippet: 'The meaning of <b>COMPED</b> is provided free of charge : complimentary. How to use <b>comped</b> in a sentence.',
      cacheId: 'BZldh-WU-zAJ',
      formattedUrl: 'https://www.merriam-webster.com/dictionary/comped',
      htmlFormattedUrl: 'https://www.merriam-webster.com/dictionary/<b>comped</b>',
      pagemap: { cse_thumbnail: [Array], metatags: [Array], cse_image: [Array] }
    }
  ]
    
*/
