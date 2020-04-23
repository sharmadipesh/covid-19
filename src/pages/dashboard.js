import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getGlobalCountData,checkReduxSetOrNot} from 'redux/actions/country';
import idx from 'idx';
import CardForCount from 'components/CardForCount';

class Dashboard extends Component {

    componentDidMount = () =>{
        this.props.checkReduxSetOrNot();
        this.props.getGlobalCountData();
    }

    render() {
        return (
            <div>
                {/* worldwide container */}
                <CardForCount covid={{
                    confirmed:idx(this.props.global_count_Data,_=>_.result.confirmed),
                    recovered:idx(this.props.global_count_Data,_=>_.result.recovered),
                    deaths:idx(this.props.global_count_Data,_=>_.result.deaths)
                }}/>
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