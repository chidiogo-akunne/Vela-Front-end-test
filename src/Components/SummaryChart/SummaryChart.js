import React from 'react'
import Card from '../Commons/Card/Card'
import Button from '../Commons/Button/Button'

export default function SummaryChart() {
    return (
        <div>
            <Card>
                <div className="row">
                    <div className="col-sm-7">
                        <h6>Today: 5, Aug 2018</h6>
                    </div>
                    <div className="col-sm-3">
                        <div className="dropdown">
                            <Button className="btn btn-light dropdown-toggle" dataToggle="dropdown">
                                1 Jan - 1 June
                            </Button>
                            <ul className="dropdown-menu">
                                <li>1 Jan - 1 June</li>
                                <li>2 June - 31 Dec</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-2">
                      <Button><i class="fas fa-angle-left"></i></Button> 
                      <Button><i class="fas fa-angle-right"></i></Button> 
                    </div>
                </div>
                Graph
            </Card>
        </div>
    )
}
