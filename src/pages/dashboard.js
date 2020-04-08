import React, { Component } from 'react';
// import { Card } from 'antd';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <div className="parent-row parent-v-center">
                        <img alt="logo" id="loading" src="images/virus.svg" className="page-logo mr-10"/>
                        <div className="parent-row parent-v-center">
                            <div className="header-title text-color-white">COVID - </div>
                            <div className="header-title color-text-green">19</div>
                        </div>
                    </div>
                </div>
                {/* worldwide container */}
                <div className="mtb-20 parent-row parent-h-center world-wide-container">
                    {/* <Card className="card-styling">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card> */}
                </div>
            </div>
        );
    }
}

export default Dashboard;