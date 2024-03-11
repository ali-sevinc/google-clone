import SearchImageResults from "@/components/search/SearchImageResults";

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

type ResultType = {
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  image: { contextLink: string; thumbnailLink: string };
};

export default async function Image({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) {
  const query = searchParams.searchTerm;
  const data = await searchInImages(query);

  if (!data?.length) {
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

  return <SearchImageResults results={data} />;
}

async function searchInImages(query: string) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}&searchType=image`
  );
  if (!res.ok) throw new Error("An error occured.");
  const resData = await res.json();
  const data = resData.items;

  return data as ResultType[];
}
