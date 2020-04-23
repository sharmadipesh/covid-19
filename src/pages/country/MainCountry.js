import React, { Component } from 'react';
import idx from 'idx';
import CardForCount from 'components/CardForCount';
import { connect } from 'react-redux';
import CountryData from 'components/CountryData';
import { getSpecificCountryData } from "redux/actions/country";

class MainCountry extends Component {

    state = {
        countryCode:'IN'
    }

    componentDidMount =() =>{
        // this.props.getSpecificCountryData('IND');
    }

    selectHandler = (e) =>{
        this.setState({
            countryCode:e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-10">
                        <div className="col-md-6 col-12 col-lg-6 pl-25 pr-20">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Country</label>
                                <select 
                                    className="form-control form-control-lg select-option" 
                                    onChange={this.change} 
                                    value={this.state.countryCode}
                                >
                                    {/* <option>1</option> */}
                                    {CountryData.map((country,index)=><option key={index} value={country.code}>{country.name}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <CardForCount covid={{
                    confirmed:0,
                    recovered:0,
                    deaths:0
                }}/>
            </div>
        );
    }
}

// export default MainCountry;
function mapStateToProps(state) {
    return {
    };
}

export default connect(
    mapStateToProps,
    {getSpecificCountryData}
)(MainCountry);