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
        this.props.userSelected(null);
    }

    render() {

        if(!this.props.user) return (<div className="hidden"></div>);

        const { name } = this.props.user;
        const { screen_name } = this.props.user;
        const { location } = this.props.user;
        const { description } = this.props.user;
        const { profile_background_color } = this.props.user;
        const { created_at } = this.props.user;
        const { profile_background_image_url } = this.props.user;
        const { profile_image_url } = this.props.user;

        return (
            <Modal show={!!this.props.user} onHide={this.closeModal}>
                <Modal.Header>
                    <Modal.Title>{name + ' ' +this.props.user.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row" style={{ backgroundImage: 'url('+profile_background_image_url+')   ' }} >
                        <div className="col-md-12">
                            <div className="media">
                                <div className="media-body">
                                    <div className="media-heading">
                                        <h4>{screen_name}</h4>
                                    </div>
                                    <h4>{location}</h4>
                                    <p>{description}</p>
                                    <span>{created_at}</span>
                                </div>
                                <div className="media-right media-middle">
                                    <a href={`https://twitter.com/${screen_name}`} target="_blank">
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
// on the BookList Container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all of our  reducers
  return bindActionCreators({ userSelected }, dispatch)
}

function mapStateToProps({ user }) {
    return { user };
}

export default connect(null,mapDispatchToProps)(CustomModal);
