import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

export default function Pagination({
    currentPage,
    totalPages,
    handlePageChange,
}) {
    // Function to render individual page buttons
    const renderPageButton = (pageNumber) => (
        <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 mx-1 rounded-full ${currentPage === pageNumber ? 'bg-blue-500' : 'bg-gray-100'}`}
        >
            {pageNumber}
        </button>
    );

    const maxPageButtons = 5;

    // Generate an array of page numbers to display
    const getPageNumbers = () => {
        if (totalPages <= maxPageButtons) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const start = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
        const end = Math.min(totalPages, start + maxPageButtons - 1);

        if (end === totalPages) {
            return Array.from({ length: maxPageButtons }, (_, i) => totalPages - maxPageButtons + i + 1);
        }

        return Array.from({ length: maxPageButtons }, (_, i) => start + i);
    };

    const pageNumbers = getPageNumbers();

    return (
        <nav className="flex justify-center">
            {/* Previous page button */}
            <button
                key="prev"
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-3 py-2 mx-1 rounded-full ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200'}`}
                disabled={currentPage === 1}
            >
                <HiOutlineChevronLeft className="text-gray-600" />
            </button>

            {/* Render page buttons */}
            {pageNumbers.map((pageNumber) => renderPageButton(pageNumber))}

            {/* Next page button */}
            <button
                key="next"
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-3 py-2 mx-1 rounded-full ${currentPage === totalPages ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200'}`}
                disabled={currentPage === totalPages}
            >
                <HiOutlineChevronRight className="text-gray-600" />
            </button>
        </nav>
    );
}
