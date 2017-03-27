import React, { Component } from 'react';

export default class Loader extends Component {
    render(){
        return(
            <div className="loader col-md-12">
                <div className="loader-container col-md-offser-3 col-md-6">
                    <i className="fa fa-refresh fa-spin"></i>
                </div>
            </div>
        );
    }
}
