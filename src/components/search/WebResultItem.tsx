import Image from "next/image";
import Link from "next/link";
import Parser from "html-react-parser";

type ResultType = {
  title: string;
  link: string;
  displayLink: string;
  htmlSnippet: string;
  pagemap: { cse_thumbnail: { src: string }[] };
};
export default function WebResultItem({ result }: { result: ResultType }) {
  return (
    <li key={result.link}>
      <Link href={result.link} className="group">
        <div className="flex items-center gap-4">
          {result.pagemap?.cse_thumbnail?.[0]?.src && (
            <Image
              alt={result.title}
              width={35}
              height={35}
              src={result.pagemap.cse_thumbnail[0].src}
              className="rounded-full"
              style={{ width: "35px", height: "35px" }}
            />
          )}

          <p>{result.displayLink}</p>
        </div>
        <h2 className="text-blue-500 text-xl group-hover:underline truncate">
          {result.title}
        </h2>
      </Link>
      <p>{Parser(result.htmlSnippet)}</p>
    </li>
  );
}
