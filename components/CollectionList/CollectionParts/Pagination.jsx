import React, { useState } from 'react';

const Pagination = ({ category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Logic to calculate the index range of products to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = category.slice(indexOfFirstItem, indexOfLastItem);

  // Event handler for changing the current page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Render the current page of products */}
      {currentItems.map(product => (
        <div key={product.id}>
          {/* Render product details */}
          <p>{product.name}</p>
        </div>
      ))}

      {/* Pagination controls */}
      <div>
        {/* Previous button */}
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {/* Page numbers */}
        {Array.from({ length: Math.ceil(category.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}

        {/* Next button */}
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= category.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;