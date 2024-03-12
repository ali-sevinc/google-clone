export default function ImageLoading() {
  return (
    <ul className="mx-auto w-72 sm:w-full sm:mx-4 flex gap-8 flex-wrap mt-12 ml-4 lg:ml-32">
      {Array.from({ length: 10 }, (_, i) => i).map((j) => (
        <LoadingItem key={j} />
      ))}
    </ul>
  );
}

function LoadingItem() {
  return (
    <li className="flex w-72 h-56 flex-col gap-2 animate-pulse">
      <div className=" w-full h-40 bg-stone-200" />
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 rounded-full bg-stone-200" />
        <span className="w-full h-4 rounded-xl bg-stone-200" />
      </div>
    </li>
  );
}
