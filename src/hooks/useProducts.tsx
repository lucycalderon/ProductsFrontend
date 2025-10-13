import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { getProducts } from "../api/productService";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => {
        console.error("Errore nel caricamento dei prodotti", err);
        setError("Errore nel caricamento dei prodotti");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return {products,loading,error}; 
};
