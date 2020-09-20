import { templateSettings } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';
class AddComment extends Component{
    state = {comment: null, postId: this.props.postId }
    handleOnChange = (e)=>{
        //console.log(e.target.value);
        this.setState({comment: e.target.value });
    }
    onPostComment = ()=>{
        console.log(this.state);
        this.props.addComment(this.state);
        this.setState({comment:""})
    }
    render(){
        return(
            <div>
                Add Comment:
                <br/>
                <textarea onChange = {this.handleOnChange} value = {this.state.comment} name = "comment"/>&nbsp;
                <button onClick = {this.onPostComment} className = "btn-xs btn-primary" >Post</button>
            </div>
        )
    }
}

export default connect(null,{addComment})(AddComment);