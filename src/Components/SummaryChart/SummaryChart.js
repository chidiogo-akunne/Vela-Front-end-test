import React from 'react';
import './SummaryChart.css';
import Card from '../Commons/Card/Card'
import Button from '../Commons/Button/Button'

export default function SummaryChart() {
    return (
        <div>
            <Card style={ChartCard}>
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="chart-H6">Today: 5, Aug 2018</h6>
                    </div>
                    <div className="col-sm-3">
                        <div className="dropdown">
                            <Button className="btn btn-light dropdown-toggle" dataToggle="dropdown">
                                1 Jan - 1 June
                            </Button>
                            <ul className="dropdown-menu btn-light">
                                <li>1 Jan - 1 June</li>
                                <li>2 June - 31 Dec</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                      <Button className="btn btn-light"><i class="fas fa-angle-left"></i></Button> 
                      <Button className="btn btn-light ml-2"><i class="fas fa-angle-right"></i></Button> 
                    </div>
                </div>
                Graph
            </Card>
        </div>
    )
}

const ChartCard = {
    height: '23rem',
    padding: '1.5rem'
}
