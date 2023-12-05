import React, { useState } from 'react';
import Carsoule from './Carousel/Carousel';


const PaginationComponent = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const sectionsPerPage = 5;
    const totalPages = Math.ceil(Object.keys(data).length / sectionsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const renderCarouselItems = () => {
        const startIdx = (currentPage - 1) * sectionsPerPage;
        const endIdx = startIdx + sectionsPerPage;
        const slicedData = Object.keys(data).slice(startIdx, endIdx);

        return slicedData.map((sectionName, index) => (
            <Carsoule sectionName={sectionName} data={data} key={index} />
        ));
    };

    return (
        <div className='pagination'>
            {renderCarouselItems()}

            <div style={{ marginTop: '20px' }} className='pagination-sec'>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous Page
                </button>
                <span style={{ margin: '0 10px' }}>{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;
