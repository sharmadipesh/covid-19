import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getGlobalCountData,checkReduxSetOrNot} from 'redux/actions/country';
import idx from 'idx';
import CountUp from 'react-countup';
// import Header from 'components/Header';

class Dashboard extends Component {

    componentDidMount = () =>{
        this.props.checkReduxSetOrNot();
        this.props.getGlobalCountData();
    }

    render() {
        return (
            <div>
                {/* <Header {...this.props}/> */}
                {/* worldwide container */}
                <div className="mtb-10 d-flex flex-nowrap world-wide-container">
                    <div className="card-style card-death d-flex align-items-center flex-column justify-content-center">
                        <div className="text-color-card">
                            <CountUp end={idx(this.props.global_count_Data,_=>_.result.confirmed)} />
                        </div>
                        <div className="mt-10 color-card-text ">
                            Confirmed
                        </div>
                        <span className="blur-effect" />
                    </div>
                    <div className="card-style card-confirmed-cashes d-flex align-items-center flex-column justify-content-center">
                        <div className="text-color-card">
                            <CountUp end={idx(this.props.global_count_Data,_=>_.result.recovered)} />
                        </div> 
                        <div className="mt-10 color-card-text">
                            Recovered
                        </div>
                        <span className="blur-effect" />
                    </div>
                    <div className="card-style card-recovery d-flex align-items-center flex-column justify-content-center">
                        <div className="text-color-card">
                            <CountUp end={idx(this.props.global_count_Data,_=>_.result.deaths)} />
                        </div>
                        <div className="mt-10 color-card-text">
                            Deaths
                        </div>
                        <span className="blur-effect" />
                    </div>
                    <div style={{color:'transparent'}}>In</div>
                </div>
            </div>
        );
    }
}

// export default Dashboard;
function mapStateToProps(state) {
    return {
        global_count_Data:state.country.global_count_Data
    };
  }
  
  export default connect(
    mapStateToProps,
    {checkReduxSetOrNot,getGlobalCountData}
  )(Dashboard);