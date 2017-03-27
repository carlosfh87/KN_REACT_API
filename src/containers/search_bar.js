import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFollowers } from '../actions/index';


class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { user1: '', user2: '' };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeUser1 = this.onChangeUser1.bind(this);
        this.onChangeUser2 = this.onChangeUser2.bind(this);
    }

    onChangeUser1(event) {
        this.setState({
            user1 : event.target.value
        })
    }

    onChangeUser2(event) {
        this.setState({
            user2 : event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.getFollowers(this.state);
    }

    render(){
        return(
            <div className="col-md-6 col-md-offset-3" id="search-container">
                <form className="form-horizontal" onSubmit={this.onFormSubmit} id="search-form" >
                    <div className="form-group">
                        <label className="control-label col-sm-2">User 1:</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter a user name"
                                value={this.state.user1}
                                onChange={this.onChangeUser1}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">User 2:</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter a user name"
                                value={this.state.user2}
                                onChange={this.onChangeUser2}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Search comun users</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}



// Anything returned from this function  end up as props
// on the followers Container
function mapDispatchToProps(dispatch) {
  // get the users and call the action method to get followers/friends
  return bindActionCreators({ getFollowers }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);
