import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import Comments from './Comments';

class ViewBigPost extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        //console.log(this.props.match.params.id);
    }

    renderComments = () =>{
        if(!this.props.comments){
            return <div>No comments yet, Be the first one to comment</div>
        }
        return <div><Comments comments = {this.props.comments} /> </div>
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className = "col-md-8">
                        <br />
                        <img src={this.props.selectedImg && this.props.selectedImg.base64} width="100%" height="100%" alt={this.props.caption} />
                        <br /><label>{this.props.caption}</label>
                    </div>
                    <div className = "col-md-4" >
                        Comments
                        {this.renderComments()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { selectedImg: state.posts.imageDet, caption: state.posts.caption, comments: state.posts.comments };
}

export default connect(mapStateToProps, { fetchPost })(ViewBigPost);