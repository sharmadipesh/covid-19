import React, { Component } from 'react';
import idx from 'idx';
import CardForCount from 'components/CardForCount';
import { connect } from 'react-redux';

class MainIndia extends Component {
    render() {
        return (
            <div>
                {/* India */}
                <CardForCount covid={{
                    confirmed:0,
                    recovered:0,
                    deaths:0
                }}/>
            </div>
        );
    }
}

// export default MainIndia;
function mapStateToProps(state) {
    return {
    };
}

export default connect(
    mapStateToProps,
    {}
)(MainIndia);