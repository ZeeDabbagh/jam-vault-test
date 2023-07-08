// Header.js
import React from 'react';
import Navbar from './Navbar'

const styles = {
    headerStyle: {
        // background: 'linear-gradient(45deg, #F23D5E, #BF3480, #A62991, #F26666)',
        padding: '25px'
    },
    headingStyle: {
        fontSize: '50px',
        color: 'black',
        textAlign: 'center'
    },
}

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}