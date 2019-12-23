import React from 'react'
import Pagination from '../Pagination/Pagination'

export default function Footer() {
    return (
        <div className="row">
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

