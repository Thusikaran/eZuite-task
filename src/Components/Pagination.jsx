import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight, MdOutlineNavigateNext } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        let pages = [];
        let startPage;
        let endPage;

        if (totalPages <= 3) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 2) {
                startPage = 1;
                endPage = 3;
            } else if (currentPage === totalPages) {
                startPage = totalPages - 2;
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (startPage > 1) {
            pages.unshift('...');
        }
        if (endPage < totalPages) {
            pages.push('...');
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <div className="pagination">
            <MdOutlineKeyboardDoubleArrowLeft className='p-icon' onClick={() => onPageChange(1)} disabled={currentPage === 1}/>
            <MdOutlineKeyboardArrowLeft className='p-icon' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}/>

            {pages.map((page, index) => (
                <span
                    key={index}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    disabled={typeof page === 'string'} 
                    style={{
                        color: typeof page === 'number' && page === currentPage ? 'blue' : 'black',
                    }}
                >
                    {page}
                </span>
            ))}

            
            <MdOutlineNavigateNext className='p-icon' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}/>          
            <MdOutlineKeyboardDoubleArrowRight className='p-icon'  onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}/>
        </div>
    );
};

export default Pagination;
