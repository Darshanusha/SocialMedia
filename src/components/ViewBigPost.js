import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import AddComment from './AddComment';
import { fetchComments } from '../actions';
import Comment from './Comment';
import { deleteComment } from '../actions';

class ViewBigPost extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        this.props.fetchComments();
        //console.log(this.props.match.params.id);
    }

    deleteComment(id) {
        console.log(id);
        this.props.deleteComment(id);
        this.props.fetchComments();
    }

    renderComments = () => {
        if (!this.props.comments) {
            return <div key={null} >No comments yet, Be the first one to comment</div>
        }
        return this.props.comments.map((comment) => {
            if (comment.postId == this.props.match.params.id) {

                return <>
                    <tr>
                        <td> <Comment comment={comment} /></td>
                        <td><button className="btn-xs btn-danger" onClick={() => this.deleteComment(comment.id)} >Delete</button></td>
                    </tr>
                </>;
            }
            return <div></div>;
        })

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <br />
                        <img src={this.props.selectedImg && this.props.selectedImg.base64} width="100%" height="100%" alt={this.props.caption} />
                        <br /><label>{this.props.caption}</label>
                    </div>
                    <div className="col-md-4" >
                        Comments
                        <AddComment postId={this.props.match.params.id} />
                        <table >
                            {this.renderComments()}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { selectedImg: state.posts.imageDet, caption: state.posts.caption, comments: state.comments && Object.values(state.comments) };
}

export default connect(mapStateToProps, { fetchPost, fetchComments, deleteComment })(ViewBigPost);