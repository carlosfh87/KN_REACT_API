import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSelected } from '../../actions/index';


class FollowerListItem extends Component {

    constructor(props) {
        super(props);
        this.onCLickList = this.onCLickList.bind(this);
    }

    onCLickList (event) {
        event.preventDefault();
        this.props.userSelected(this.props);
    }

    render(){

        const user_url = `https://twitter.com/${this.props.screen_name}`;
        const styleItemContainer = { backgroundColor : "#"+this.props.profile_background_color };
        const styleItemContainerList = {
            backgroundImage: "url("+this.props.profile_background_image_url+")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };
        const styleDescription = { color : "#"+this.props.profile_text_color };

        return(
            <li className="list-group-item followers-item" onClick={ this.onCLickList } style={styleItemContainerList}>
                <div className="media" style={styleItemContainer}>

                    <div className="media-left">
                        <img className="media-object" src={this.props.profile_image_url} />
                    </div>

                    <div className="media-body">
                        <h5 className="media-heading">{this.props.name}</h5>
                        <h6 className="media-heading"><a href={user_url} target="_blank">{this.props.screen_name}</a></h6>
                        <span>{this.props.location}</span>
                        <p style={styleDescription}>{this.props.description}</p>
                    </div>

                </div>
            </li>
        );
    }
}

// Anything returned from this function  end up as props
// on the CustomModal Container
function mapDispatchToProps(dispatch) {
  // whenever userSelected is called, the result should be passed
  // to all of our  reducers
  return bindActionCreators({ userSelected }, dispatch)
}
export default connect(null, mapDispatchToProps)(FollowerListItem);
