export default function WebLoading() {
  return (
    <ul className="w-96 flex flex-col gap-8">
      {Array.from({ length: 10 }, (_, i) => i).map((j) => (
        <LoadingItem key={j} />
      ))}
    </ul>
  );
}

function LoadingItem() {
  return (
    <li className="max-w-2xl w-full flex flex-col gap-2 animate-pulse mt-12 ml-4 lg:ml-32">
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 rounded-full bg-stone-200" />
        <span className="h-2 w-1/2 bg-stone-200 rounded-xl" />
      </div>
      <div className="h-4 rounded-xl w-[75%] bg-stone-200" />
      <div className="h-3 rounded-xl w-full bg-stone-200" />
      <div className="h-3 rounded-xl w-[60] bg-stone-200" />
    </li>
  );
}
