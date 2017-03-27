import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSelected } from '../actions/index';

import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        // Set user state tu null and hide the modal
        this.props.userSelected(null);
    }

    render() {
        // if no user is selected return an empty div
        if(!this.props.user) return (<div className="hidden"></div>);

        // Get all the proporties from the selected user and pass it to the modal
        const { name } = this.props.user;
        const { screen_name } = this.props.user;
        const { location } = this.props.user;
        const { description } = this.props.user;
        const { profile_background_color } = this.props.user;
        const { profile_text_color } = this.props.user;
        const { created_at } = this.props.user;
        const { profile_banner_url } = this.props.user;
        const { profile_background_image_url } = this.props.user;
        const { profile_image_url } = this.props.user;

        let bgBodyModalContainer = profile_banner_url?profile_banner_url:profile_background_image_url;

        let modalBgColor = profile_background_color
                        .match(/.{1,2}/g)
                        .map((val) => parseInt(val,16) )
                        .join(",")
                        .concat(",0.6");

        const modalBg = {
            backgroundColor: `rgba(${modalBgColor})`
        };

        const modalBodyBg = {
            textShadow: "-1px 1px 1px rgba(255, 255, 255, 1)",
            color: `#${profile_text_color}`
        };

        const twitter_url = `https://twitter.com/${screen_name}`;

        return (
            <Modal show={!!this.props.user} onHide={this.closeModal} style={modalBg}>
                <Modal.Header>
                    <Modal.Title>{name + ' ' +this.props.user.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row" style={{ backgroundImage: 'url('+bgBodyModalContainer+')' }} >
                        <div className="col-md-12">
                            <div className="media">
                                <div className="media-body" style={modalBodyBg}>
                                    <div className="media-heading">
                                        <a href={twitter_url} target="_blank">
                                            <h4>{screen_name}</h4>
                                        </a>
                                    </div>
                                    <h4>{location}</h4>
                                    <p>{description}</p>
                                    <span>{created_at}</span>
                                </div>
                                <div className="media-right media-middle">
                                    <a href={twitter_url} target="_blank">
                                        <img className="media-object" src={profile_image_url} alt={name} title={name} width='100' height='100' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

// Anything returned from this function  end up as props
// on the followers Container
function mapDispatchToProps(dispatch) {
  // whenever userSelected is called, the result should be passed
  // to all of our  reducers
  return bindActionCreators({ userSelected }, dispatch)
}

function mapStateToProps({ user }) {
    return { user };
}

export default connect(null,mapDispatchToProps)(CustomModal);
