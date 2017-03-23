import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomModal from './custom_modal';

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

    render(){
        return(
            <div className="col-md-12" id="followers-container">
                <CustomModal user={this.props.user} />
                <FollowersList nameList="Comun followers" users={ this.props.users.followers } />
                <FollowersList nameList="Comun friends" users={ this.props.users.friends } />
            </div>
        );
    }
}

function mapStateToProps({ users, user }) {
    return { users , user };
}

export default connect(mapStateToProps)(Followers);
