const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;
export default async function Web({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) {
  const query = searchParams.searchTerm;
  const data = await searchInWeb(query);

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

  return (
    <div>
      {data.map((item) => (
        <h2 key={item.title}>{item.title}</h2>
      ))}
    </div>
  );
}

async function searchInWeb(query: string) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`
  );
  if (!res.ok) throw new Error("An error occured.");
  const resData = await res.json();

  const data = resData.items;

  return data;
}
