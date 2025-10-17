type PaginationProps = {
  currentPage: number;
  numberOfPages: number;
  onPageChange: (page: number) => Promise<void>;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  numberOfPages,
  onPageChange,
}) => {
  const maxVisible = 4;
  const total = numberOfPages;

  let start = Math.max(0, currentPage - Math.floor(maxVisible / 2));
  let end = start + maxVisible;
  if (end > total) {
    end = total;
    start = Math.max(0, end - maxVisible);
  }

  // Genera direttamente l’array di bottoni
  const pageButtons = Array.from({ length: end - start }, (_, i) => {
    const page = start + i;
    return (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        disabled={page === currentPage}
      >
        {page + 1}
      </button>
    );
  });

  return <div className="pagination">{pageButtons}</div>;
};
