import { useEffect, useState } from "react";
import { Book } from "../types/Book";

interface BookProps {
  categoryId: string;
}

export default function useBook({ categoryId }: BookProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.codetabs.com/v1/proxy?quest=https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}`
        );
        if (res.ok) {
          const data = await res.json();
          setBooks(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    if (categoryId) {
      getBooks();
    }
  }, [categoryId]);

  return { books, setBooks, isLoading };
}
