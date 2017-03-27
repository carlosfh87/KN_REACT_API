import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showLoader } from '../actions/index';
import CustomModal from './custom_modal';
import Loader from '../components/Loader';

import FollowersList from '../components/followers/followers_list';

class Followers extends Component {
    constructor(props){
        super(props);

        this.state = {
            'users' : {
                'followers' : [],
                'friends' : []
            }
        }
    }

    getLoader() {
        if( !this.props.loader ) return "";
        return (
            <Loader />
        );
    }

    render(){
        let error = "";
        if( this.props.users.error ){
            error = (
                <div className="alert alert-danger" role="alert">
                    <strong>{this.props.users.error.message}</strong>
                </div>
            );
        }
        return (
            <div className="col-md-12" id="followers-container">
                { error }
                <CustomModal user={this.props.user} />
                { this.getLoader() }
                <FollowersList nameList="common followers" users={ this.props.users.followers } />
                <FollowersList nameList="common friends" users={ this.props.users.friends } />
            </div>
        );
    }
}

// pass the users ans the selected user to followersList and CustomModal component respectively
function mapStateToProps({ users, user, loader }) {
    return { users , user, loader };
}

export default connect(mapStateToProps)(Followers);
