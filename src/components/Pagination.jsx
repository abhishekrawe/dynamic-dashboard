import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

export default function Pagination({
    currentPage,
    totalPages,
    handlePageChange,
}) {
    return (
        <nav className="flex justify-center">
            <button
                key="prev"
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-3 py-2 mx-1 rounded-full ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200'
                    }`}
                disabled={currentPage === 1}
            >
                <HiOutlineChevronLeft className="text-gray-600" />
            </button>
            {renderPageButtons(currentPage, totalPages, handlePageChange)}
            <button
                key="next"
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-3 py-2 mx-1 rounded-full ${currentPage === totalPages
                        ? 'bg-gray-100 cursor-not-allowed'
                        : 'bg-gray-200'
                    }`}
                disabled={currentPage === totalPages}
            >
                <HiOutlineChevronRight className="text-gray-600" />
            </button>
        </nav>
    );
}

const renderPageButtons = (currentPage, totalPages, handlePageChange) => {
    const buttons = [];
    const maxPageButtons = 5;
    const showAllButtons = totalPages <= 2 || currentPage <= 2;

    for (let i = 1; i <= totalPages; i++) {
        if (
            (showAllButtons || i === 1 || i === totalPages) ||
            (i >= currentPage - Math.floor(maxPageButtons / 2) &&
                i <= currentPage + Math.floor(maxPageButtons / 2))
        ) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-2 mx-1 rounded-full ${currentPage === i ? 'bg-gray-200' : 'bg-gray-100'
                        }`}
                >
                    {i}
                </button>
            );
        }
    }

    return buttons;
};