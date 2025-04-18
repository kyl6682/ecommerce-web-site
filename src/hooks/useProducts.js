import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

export const useProducts = ({page = 1, categoryId =null, limit = 20}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newDataLength, setNewDataLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);

        try {
            const offset = (page - 1) * limit;
            console.log("offset:", offset, "page:", page, "categoryId:", categoryId)
            const products = await getProducts({offset, limit, categoryId});

            setProducts((prev) => {
                return page === 1 ? products : [...prev, ...products];
            });
            setNewDataLength(products.length);
            setError(null);

        } catch (err) {
            setError("데이터 불러오기 실패 : " + err.message);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
  }, [page, categoryId]);

  return {products, loading, error, newDataLength}
}

