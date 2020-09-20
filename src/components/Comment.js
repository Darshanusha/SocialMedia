import React, { Component } from 'react';

class Comment extends Component{
    render(){
        return(
            <>
                {this.props.comment.comment}
            </>
        )
    }
}

export default Comment;