import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <>
                <div className="header-container">
                    <div className="d-flex align-items-center">
                        <img alt="logo" id="loading" src="images/virus.svg" className="page-logo mr-10" onClick={this.props.sidebarHandler}/>
                        <div className="d-flex align-items-center" onClick={this.props.sidebarHandler}>
                            <div className="header-title text-color-white">COVID - </div>
                            <div className="header-title color-text-green">19</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;