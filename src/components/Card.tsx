import { Book } from "../types/Book";

interface CardProps {
  data: Book;
  handleFavorite: (id: number) => void;
}

export const Card = ({ data, handleFavorite }: CardProps) => {
  return (
    <div className="bg-white">
      <div className="flex flex-col">
        <img
          src={data.cover_url}
          alt={`${data.title} cover`}
          className="rounded-lg object-cover"
        />
        <div className="flex flex-col px-1 py-2">
          <div className="text-sm text-gray-800 line-clamp-1">{data.title}</div>
          <div className="flex justify-between items-center mt-1">
            <div className="text-sm text-gray-500">
              {data.authors.length > 0 ? data.authors[0] : "Anonymous"}
            </div>
            <button type="button" onClick={() => handleFavorite(data.id)}>
              {data.isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardLoading = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="h-[280px] bg-gray-200 rounded-md"></div>
      <div className="flex flex-col py-2 gap-2">
        <div className="h-3 bg-gray-200 rounded-sm"></div>
        <div className="h-3 bg-gray-200 rounded-sm"></div>
      </div>
    </div>
  );
};
