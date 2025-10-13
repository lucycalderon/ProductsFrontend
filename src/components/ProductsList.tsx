
import { useProducts } from "../hooks/useProducts";

const ProductsList = () => {
  const { products, loading, error } = useProducts();
  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

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
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.categoria}</td>
              <td>{p.prezzo}</td>
              <td>{p.quantita}</td>
              <td>{p.descrizione}</td>
              <button>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};
export default ProductsList; 