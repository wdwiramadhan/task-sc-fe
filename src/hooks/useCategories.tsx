import { useEffect, useState } from "react";
import { Category } from "../types/Category";

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGategories = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://api.codetabs.com/v1/proxy?quest=https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories"
        );

        if (res.ok) {
          const data = await res.json();
          setCategories(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    getGategories();
    return () => {
      setCategories([]);
    };
  }, []);

  return { categories, isLoading };
}
