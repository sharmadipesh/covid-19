import React, { Component } from 'react';
import Dashboard from 'pages/dashboard';
import Sidebar from 'react-sidebar';
import SidebarContainer from 'components/SidebarContainer';
import { Route, Switch } from 'react-router-dom';
import Country from 'pages/country/MainCountry';
import India from 'pages/india/MainIndia';
import Header from 'components/Header';


class MainLayout extends Component {

    state = {
		isSidebarOpen: false,
    };
    
    sidebarHandler = () =>{
        this.setState({
            isSidebarOpen:!this.state.isSidebarOpen
        })
    }

    render() {
        return (
            <div>
                <Sidebar
					sidebar={
						<SidebarContainer {...this.props} sidebarHandler={this.sidebarHandler} />
					}
					open={this.state.isSidebarOpen}
					onSetOpen={this.sidebarHandler}
					styles={{
						sidebar: {
                            background: '#827397',
							zIndex: '1034',
							width: window.innerWidth > 600 ? '40vw' : '70vw',
						},
					}}
				>
                    <Header {...this.props} sidebarHandler={this.sidebarHandler}/> 
					<Switch>    
                        <Route
							exact
							path={'/'}
							component={Dashboard}
							{...this.props}
						/>
                        <Route
							exact
							path={'/country'}
							component={Country}
							{...this.props}
						/>
                        <Route
							exact
							path={'/india'}
							component={India}
							{...this.props}
						/>
                    </Switch>
                </Sidebar>
            </div>
        );
    }
}

export default MainLayout;