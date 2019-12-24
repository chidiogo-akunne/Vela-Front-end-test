import React from 'react'
import Pagination from '../Pagination/Pagination';
import './Footer.css';

export default function Footer() {
    return (
        <div className="row footer-Q">
           <div className="col-6">
           <p>Showing 1 to 10 of 500 enteries 
            </p>
            </div> 
            <div className="col-6">
                <Pagination pageStyle={pageStyle}/>
            </div>
        </div>
    )
}

const pageStyle= {
    float: 'right'
}

