export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  return (
    <div className="pagination">
      <button type="button" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        이전
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        다음
      </button>
    </div>
  )
}
