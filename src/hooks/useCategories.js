import { useEffect } from "react";
import { useState } from "react"
import { getAllCategories } from "../api/categories";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);

        try {
            const data = await getAllCategories();

            setCategories(data);
            setError(null);
        } catch (err) {
            setError("데이터 불러오기 실패 : " + err.message);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
  }, []);

  return {categories, loading, error}
}

