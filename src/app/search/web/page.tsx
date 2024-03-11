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
  searchParams: { searchTerm: string; start: string };
}) {
  const start = searchParams.start || "1";
  const query = searchParams.searchTerm;
  const data = await searchInWeb(query, start);

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

async function searchInWeb(query: string, num: string) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}&start=${num}`
  );
  if (!res.ok) throw new Error("An error occured.");
  const data = await res.json();
  // console.log(data);

  return data as ResultsType;
}
