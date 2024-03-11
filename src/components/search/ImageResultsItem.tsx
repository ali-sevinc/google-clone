import Image from "next/image";
import Link from "next/link";
type ResultType = {
  title: string;
  htmlTitle: string;
  displayLink: string;
  link: string;
  image: { thumbnailLink: string; contextLink: string };
};
export default function ImageResultsItem({ result }: { result: ResultType }) {
  return (
    <li>
      <Link href={result.image.contextLink}>
        <img src={result.link} alt={result.title} className="object-contain" />
        <div className="flex gap-4 items-center mt-1">
          {result.image?.thumbnailLink && (
            <img
              src={result.image.thumbnailLink}
              alt="thumbnail"
              className="h-8 w-8 rounded-full border border-stone-300"
            />
          )}
          <h2 className="truncate text-lg">{result.title}</h2>
        </div>
      </Link>
      <Link
        href={`https://${result.displayLink}`}
        className="px-2 hover:underline pt-1"
      >
        {result.displayLink}
      </Link>
    </li>
  );
}
