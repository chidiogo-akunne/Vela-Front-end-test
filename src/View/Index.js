import React from "react";
import "./Index.css";
import "../Components/SummaryChart/SummaryChart.css"
import NavBar from "../Components/NavBar/NavBar";
import SideNav from "../Components/SideNav/SideNav";
import DailyTransactions from "../Components/DailyTransactions/DailyTransactions";
import SummaryChart from "../Components/SummaryChart/SummaryChart";
import Progress from "../Components/Progress/Progress";
import SearchInput from "../Components/Commons/SearchInput/SearchInput";
import Button from "../Components/Commons/Button/Button";
import TableTransaction from "../Components/TableTransaction/TableTransaction";
import Footer from "../Components/Footer/Footer";


export default function Index() {
  return (
    <div>
      <NavBar />
      <div className="row">
        <div className="col-3 Side">
          <SideNav />
        </div>
        <div className="col-9">
          <div className="container">
            <div className="row index-Row">
              <div className="col-lg-3 col-sm-6">
                <DailyTransactions title="Volume" price="2,342" />
              </div>
              <div className="col-lg-3 col-sm-6">
                <DailyTransactions title="Value" price="4,000,000" />
              </div>
              <div className="col-lg-3 col-sm-6">
                <DailyTransactions title="Volume" price="452,000" />
              </div>
              <div className="col-lg-3 col-sm-6">
                <DailyTransactions title="Value" price="4,000,000" />
              </div>
            </div>
            <div className="row index-Row">
              <div className="col-lg-8 col-md-12">
                <SummaryChart />
              </div>
              <div className="col-lg-4 col-md-12">
                <Progress title="Orders" />
                <Progress title="Payments" className="progresStyle" />
              </div>
            </div>
            <h4 className="index-Row">Payments</h4>
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <span className="table-Header">
                  Showing
                  <div className="dropdown">
                    <div
                      className=" dropdown-toggle heading-Dropdown"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      20
                    </div>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="dropdown-item">40</li>
                      <li className="dropdown-item">60</li>
                      <li className="dropdown-item">80</li>
                    </div>
                  </div>
                  out of 500 payments
                </span>
              </div>
            <div className="col-lg-4 col-sm-12">
                <SearchInput placeholder="Search Payments" SearchStyle="tableSearch"/>
            </div>
            <div className="col-lg-4 col-sm-12 table-Header">
                Show
            <div className="dropdown pl-4">
                            <Button className="btn btn-light dropdown-toggle drop-down-toggle-table" dataToggle="dropdown">
                                All
                            </Button>
                            <ul className="dropdown-menu btn-light">
                                <li>All</li>
                                <li>Reconciled</li>
                                <li>Un-reconciled</li>
                                <li>Settled</li>
                                <li>Unsettled</li>
                            </ul>
                        </div>
            </div>
            </div>
            <TableTransaction className="index-Row"/>
          <Footer />
          </div>
          
        </div>
      </div>
    </div>
  );
}
