import { Layout, Card } from "../components";
import useLocalStorage from "../hooks/useLocalStorage";
import { Book } from "../types/Book";

export default function Favorite() {
  const [favorites, setFavorites] = useLocalStorage<Book[]>("favorite", []);
  const favoriteBooks = favorites.map((item) => ({
    ...item,
    isFavorite: true,
  }));

  const handleFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <h1 className="text-lg font-medium -mt-2">Favorite Books</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-2 md:mt-6 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 min-h-[60vh]">
          {favoriteBooks.map((item: Book, index: number) => (
            <Card data={item} key={index} handleFavorite={handleFavorite} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
