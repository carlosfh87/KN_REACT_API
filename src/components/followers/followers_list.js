import React, { Component } from 'react';
import FollowerListItem from './followers_list_item';

export default class FollowersList extends Component{
    constructor(props){
        super(props);
    }

    getListItem(user,index){
        return(
            <FollowerListItem {...user} key={user.id}/>
        );
    }

    validateList() {
        // if there are users print the users,, if not return users not found message
        if(!this.props.users || !this.props.users.length){
            return (<div className="col-md-6">No users found</div>);
        }

        return (
            <ul>{this.props.users.map( (user,index) => this.getListItem(user,index) )}</ul>
        );
    }

    render(){
        return (
            <div className="col-md-6">
                <div className="col-md-12 followers-list">
                    <h4 className="text-center" >{this.props.nameList}</h4>
                    {this.validateList()}
                </div>
            </div>
        );
    }
}
