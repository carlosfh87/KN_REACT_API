import React, { Component } from 'react';
import FollowerListItem from './followers_list_item';

export default class FollowersList extends Component{
    constructor(props){
        super(props);

        this.state = {
            'nameList' : '',
            'users' : []
        }
    }

    getListItem(user,index){
        console.log("user:", user, index)
        let userFake = {
          "id": index,
          "name": "Jesus Rafael Abreu M",
          "screen_name": "chuomaraver",
          "location": "Medellín, Colombia",
          "description": "oijdasdns aldjaopso asdopmsoidjojasd",
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
          "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_4_normal.png",
          "profile_link_color": "0084B4",
          "profile_text_color": "333333",
          "created_at": "Mon Jan 23 14:08:12 +0000 2012"
        }
        return(
            <FollowerListItem {...userFake} key={index}/>
        );
    }

    validateList() {
        if(!this.props.users.length){
            return (<div className="col-md-6">No users found</div>);
        }

        return (
            <ul>{this.props.users.map( (user,index) => this.getListItem(user,index) )}</ul>
        );
    }

    render(){

        console.log(`FollowersList ${this.props.nameList} render`)
        console.log(`FollowersList ${this.props.users} render`)

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
