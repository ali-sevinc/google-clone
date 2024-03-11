import { ResultsType } from "@/app/search/web/page";

import WebResultItem from "./WebResultItem";
import Pagination from "./Pagination";

export default function SearchWebResults({
  results,
}: {
  results: ResultsType;
}) {
  return (
    <div className="mx-auto mt-4 px-3 pb-56 sm:pb-40 md:pl-[12%] lg:pl-52 w-full">
      <p className="text-sm text-stone-600 pb-5 pt-2">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      <ul className="flex flex-col gap-8 max-w-2xl">
        {results.items.map((item) => (
          <WebResultItem key={item.link} result={item} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}
