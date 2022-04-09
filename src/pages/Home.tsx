import { useCallback, useEffect, useState } from "react";
import { Select, Card, CardLoading, Search, Layout } from "../components";
import useBook from "../hooks/useBook";
import useCategories from "../hooks/useCategories";
import { Category, Option } from "../types/Category";
import { Book } from "../types/Book";
import Pagination from "../components/pagination/Pagination";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Option | undefined>(
    undefined
  );
  const [showBooks, setShowBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useLocalStorage<Book[]>("favorite", []);
  const { categories, isLoading: isCategoryLoading } = useCategories();
  const { books, setBooks, isLoading } = useBook({
    categoryId: selectedCategory?.value as string,
  });
  const size = 12;

  const handlePagination = useCallback((e) => {
    setPage(e.selected);
    window.scrollTo({
      top: 115,
      behavior: "smooth",
    });
  }, []);
  const handleFavorite = (id: number) => {
    const newBooks = books.map((item) => {
      if (item.id === id) {
        if (!item.isFavorite) {
          setFavorites([...favorites, item]);
        } else {
          setFavorites(favorites.filter((item) => item.id !== id));
        }
        item.isFavorite = !item.isFavorite;
      }
      return item;
    });
    setBooks(newBooks);
  };

  useEffect(() => {
    if (categories.length !== 0) {
      setSelectedCategory({
        label: categories[0].name,
        value: categories[0].id,
      });
    }
  }, [categories]);

  useEffect(() => {
    setPage(0);
  }, [selectedCategory]);

  useEffect(() => {
    let selectedBooks: Book[] = [];
    if (search.length) {
      books.forEach((item) => {
        const rgx = new RegExp(search, "gi");
        if (!!item.title.match(rgx) || !!item.authors.join(" ").match(rgx)) {
          selectedBooks.push(item);
        }
      });
    } else {
      selectedBooks = [...books];
    }
    setTotalPage(Math.ceil(selectedBooks.length / size));
    selectedBooks = selectedBooks.slice(page * size, (page + 1) * size);
    selectedBooks = selectedBooks.map((item) => {
      favorites.forEach((favorite) => {
        if (item.id === favorite.id) {
          item.isFavorite = true;
        }
      });
      return item;
    });
    setShowBooks(selectedBooks);

    return () => setShowBooks([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books, page, search]);

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-col-reverse gap-2 md:flex-row justify-between">
          <div className="w-full md:w-72">
            <Select
              options={categories.map((item: Category) => ({
                label: item.name,
                value: item.id,
              }))}
              isDisabled={isCategoryLoading}
              value={selectedCategory}
              setValue={(e) => setSelectedCategory(e)}
            />
          </div>
          <div className="w-full md:w-96">
            <Search
              value={search}
              isDisabled={isLoading}
              setValue={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-6 md:mt-10 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 min-h-[60vh]">
          {!isLoading ? (
            <>
              {showBooks.map((item: Book, index: number) => (
                <Card data={item} key={index} handleFavorite={handleFavorite} />
              ))}
            </>
          ) : (
            <>
              {Array.from(Array(8).keys()).map((item) => (
                <CardLoading key={item} />
              ))}
            </>
          )}
        </div>
        {!isLoading && (
          <div className="flex justify-center mt-6 md:mt-10">
            <Pagination
              handlePageChange={handlePagination}
              totalPages={totalPage}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
