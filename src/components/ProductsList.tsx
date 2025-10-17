import { useProducts } from "../hooks/useProducts";
import { Pagination } from "./Pagination";

const ProductsList = () => {
  const {
    products,
    loading,
    error,
    currentPage,
    numberOfPages,
    removeProduct,
    loadProducts,
  } = useProducts();
  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="table-container">
      <h2>Lista Prodotti</h2>
      <table>
        <thead>
          <tr className="table-container-title">
            <th>ID</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Prezzo</th>
            <th>Quantità</th>
            <th>Descrizione</th>
          </tr>
        </thead>
        <tbody>
          {products?.content.map((p) => (
            <tr className="table-container-content" key={p.id}>
              <td>{p.id}</td>
              <td >{p.nome}</td>
              <td>{p.categoria}</td>
              <td>{p.prezzo}$</td>
              <td>{p.quantita}</td>
              <td >{p.descrizione}</td>
              <td>
                <button onClick={() => removeProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {products && (
        <div className="table-container-btn">
          <button
            disabled={loading || currentPage <= 0}
            onClick={() => loadProducts(currentPage - 1)}
          >
            Previous
          </button>

          {/* Paginazione Dinamica */}
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            onPageChange={loadProducts}
          />
          <button
            disabled={loading || currentPage >= products.totalPages - 1}
            onClick={() => loadProducts(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
export default ProductsList;
