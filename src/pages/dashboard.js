import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <div className="d-flex align-items-center">
                        <img alt="logo" id="loading" src="images/virus.svg" className="page-logo mr-10"/>
                        <div className="d-flex align-items-center">
                            <div className="header-title text-color-white">COVID - </div>
                            <div className="header-title color-text-green">19</div>
                        </div>
                    </div>
                </div>
                {/* worldwide container */}
                <div className="mtb-10 d-flex flex-nowrap world-wide-container">
                    <div className="card-style card-death">
                        {/* blur */}
                        <span className="blur-effect" />
                    </div>
                    <div className="card-style card-confirmed-cashes">
                        {/* blur */}
                        <span className="blur-effect" />
                    </div>
                    <div className="card-style card-recovery">
                        {/* blur */}
                        <span className="blur-effect" />
                    </div>
                    <div style={{color:'transparent'}}>In</div>
                </div>
            </div>
        );
    }
}

export default Dashboard;