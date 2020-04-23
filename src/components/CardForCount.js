import React, { Component } from 'react';
import idx from 'idx';
import CountUp from 'react-countup';

class CardForCount extends Component {
    render() {
        return (
            <>
                <div className="mtb-10 d-flex flex-nowrap world-wide-container">
                    <div className="card-style card-death d-flex align-items-center flex-column justify-content-center">
                        <div className="text-color-card">
                            <CountUp end={idx(this.props.covid,_=>_.confirmed)} />
                        </div>
                        <div className="mt-10 color-card-text ">
                            Confirmed
                        </div>
                        <span className="blur-effect" />
                    </div>
                    <div className="card-style card-confirmed-cashes d-flex align-items-center flex-column justify-content-center">
                        <div className="text-color-card">
                            <CountUp end={idx(this.props.covid,_=>_.recovered)} />
                        </div> 
                        <div className="mt-10 color-card-text">
                            Recovered
                        </div>
                        <span className="blur-effect" />
                    </div>
                    <div className="card-style card-recovery d-flex align-items-center flex-column justify-content-center">
                        <div className="text-color-card">
                            <CountUp end={idx(this.props.covid,_=>_.deaths)} />
                        </div>
                        <div className="mt-10 color-card-text">
                            Deaths
                        </div>
                        <span className="blur-effect" />
                    </div>
                    <div style={{color:'transparent'}}>In</div>
                </div>   
            </>
        );
    }
}

export default CardForCount;