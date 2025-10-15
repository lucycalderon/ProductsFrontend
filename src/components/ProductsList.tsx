import { useProducts } from "../hooks/useProducts";

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
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  console.log(products?.totalPages);
  console.log("current page: " + products?.number);
  console.log("numero di pagine: " + numberOfPages);
  console.log("ciao");
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Lista Prodotti</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr>
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
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.categoria}</td>
              <td>{p.prezzo}</td>
              <td>{p.quantita}</td>
              <td>{p.descrizione}</td>
              <td>
                <button onClick={() => removeProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {products && (
        <div>
          <button
            disabled={loading || currentPage <= 0}
            onClick={() => loadProducts(currentPage - 1)}
          >
            Previous
          </button>

          {/* --- Paginazione dinamica limitata --- */}
          {(() => {
            const pageButtons = [];
            const maxVisible = 4; // 👈 numero massimo di pagine visibili
            const total = numberOfPages;

            // Calcola l'intervallo di pagine da mostrare
            let start = Math.max(0, currentPage - Math.floor(maxVisible / 2));
            console.log("start: " + start);
            let end = start + maxVisible;

            if (end > total) {
              end = total;
              start = Math.max(0, end - maxVisible);
            }

            // Bottoni delle pagine visibili
            for (let i = start; i < end; i++) {
              pageButtons.push(
                <button key={i} onClick={() => loadProducts(i)}>
                  {i + 1}
                </button>
              );
            }
            return pageButtons;
          })()}

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
