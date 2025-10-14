import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { getProducts, deleteProduct } from "../api/productService";

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

  const removeProduct = async (id: number) => {
    try {
      deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Errore durante l'eliminazione del prodotto: ", err);
      setError("Errore durante l'eliminazione del prodotto");
    }
  };

  return { products, loading, error, removeProduct };
};
