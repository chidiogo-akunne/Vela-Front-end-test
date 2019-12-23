import React from 'react';
import './Index.css';
import NavBar from '../Components/NavBar/NavBar'
import SideNav from '../Components/SideNav/SideNav'
import DailyTransactions from '../Components/DailyTransactions/DailyTransactions'

export default function Index() {
    return (
        <div>
            <NavBar/>
            <div className="row">
                <div className="col-3">
                    <SideNav/>
                </div>
                <div className="col-9">
                    <div className="container">
                        <div className="row index-Row">
                            <div className="col-lg-3 col-sm-6">
                                <DailyTransactions title="Volume" price="2,342"/>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <DailyTransactions title="Value" price="4,000,000"/>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <DailyTransactions title="Volume" price="452,000"/>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <DailyTransactions title="Value" price="4,000,000"/>
                            </div>
                        </div>


                    </div>
                </div>
            
            
            </div>
        </div>
    )
}
