import { useEffect, useState } from "react";
import type { ProductPage } from "../types/Product";
import { deleteProduct, getPagedProducts } from "../api/productService";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductPage | null>(null);
  const [currentPage, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    loadProducts(currentPage);
  }, []);

  const removeProduct = async (id: number) => {
    try {
      await deleteProduct(id);
      setProducts((prev) =>
        prev
          ? { ...prev, content: prev.content.filter((p) => p.id !== id) }
          : prev
      );
    } catch (err) {
      console.error("Errore durante l'eliminazione del prodotto: ", err);
      setError("Errore durante l'eliminazione del prodotto");
      loadProducts(currentPage);
    }
  };

  const loadProducts = async (page: number) => {
    setLoading(true);
    try {
      const data = await getPagedProducts(page);
      setProducts(data);
      setPage(data.number);
      setNumberOfPages(data.totalPages); 
    } catch (err) {
      console.error("Errore nel caricamento dei prodotti", err);
      setError("Errore nel caricamento dei prodotti");
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, currentPage,numberOfPages, removeProduct, loadProducts };
};
