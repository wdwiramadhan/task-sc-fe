interface SearchProps {
  value: string;
  setValue: (e: any) => void;
}

export const Search = ({ value, setValue }: SearchProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={setValue}
        placeholder="Search..."
        className="w-full border-[1px] border-gray-300 focus:outline-gray-300 focus:bg-gray-50 rounded-full text-sm text-gray-800 text-left pl-5 pr-16 py-2"
      />
      <div className="absolute right-3 top-1 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};
