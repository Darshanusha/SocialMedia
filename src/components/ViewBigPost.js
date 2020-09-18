import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class ViewBigPost extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        //console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div className = "border">
                <center>
                <br />
                    <img src={this.props.selectedImg && this.props.selectedImg.base64} width="800" height="600" alt={this.props.caption} />
                    <br /><label>{this.props.caption}</label>
                </center>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { selectedImg: state.posts.imageDet, caption: state.posts.caption };
}

export default connect(mapStateToProps, { fetchPost })(ViewBigPost);