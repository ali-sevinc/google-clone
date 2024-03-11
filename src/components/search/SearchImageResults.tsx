import ImageResultsItem from "./ImageResultsItem";
import Pagination from "./Pagination";

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
    <div className="pb-56 sm:pb-40 mt-4 ">
      <ul className="grid mx-4 gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {results.map((item) => (
          <ImageResultsItem key={item.link} result={item} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}
