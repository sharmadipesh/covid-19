import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from 'components/Header';
import Icon from 'components/icon';

class SidebarContainer extends Component {
    render() {
        const pathname = this.props.location.pathname;
        return (
            <div className="sidebar-style-container">
                <Header {...this.props}/>
                <div className="mt-15">
                    <div className="mb-20 d-flex align-items-center pl-25">
                        <Icon className='icon-h-w' icon={pathname === '/' ?"ICON_WORLDWIDE_ACTIVE" :"ICON_WORLDWIDE_NO_ACTIVE"} />
                        <NavLink
                            exact
                            to={'/'}
                            activeClassName="active-sidebar-link"
                            className="sidebar-link"
                        >
                            Worldwide
                        </NavLink>
                    </div>
                    <div className="mb-20 d-flex align-items-center pl-25">
                        <Icon className='icon-h-w' icon={pathname === '/country' ?"ICON_COUNTRY_ACTIVE" :"ICON_COUNTRY_NO_ACTIVE"} />
                        <NavLink
                            to={'/country'}
                            activeClassName="active-sidebar-link"
                            className="sidebar-link"
                        >
                            Country
                        </NavLink>
                    </div>
                    <div className="mb-20 d-flex align-items-center pl-25">
                        <Icon className='icon-h-w' icon={pathname === '/india' ?"ICON_INDIA_ACTIVE" :"ICON_INDIA_NO_ACTIVE"} />
                        <NavLink
                            to={'/india'}
                            activeClassName="active-sidebar-link"
                            className="sidebar-link"
                        >
                            India
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarContainer;