import { useEffect } from "react";
import { useState } from "react"
import { getProducts } from "../api/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);

        try {
            const data = await getProducts();

            setProducts(data);
            setError(null);
        } catch (err) {
            setError("데이터 불러오기 실패 : " + err.message);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
  }, []);

  return {products, loading, error}
}

