import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import SideNav from '../Components/SideNav/SideNav'

export default function Index() {
    return (
        <div>
            <NavBar/>
            <div className="row">
                <div className="col-3">
                    <SideNav/>
                </div>
            
            
            </div>
        </div>
    )
}
