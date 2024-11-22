import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Search() {
  return (
    <div className="flex items-center gap-2 bg-background py-2 px-4 rounded-full max-w-md w-full">
      <MagnifyingGlassIcon width={25} height={25} />
      <input type="text" className="!outline-none bg-transparent" />
    </div>
  );
}

export default Search;
