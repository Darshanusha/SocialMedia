import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component{
    render(){
        return(
            <div>
                {this.props.comments.map((comment)=>{
                    return <div>
                        <Comment comment = {comment} />
                        </div>
                })}
            </div>
        )
    }
}

export default Comments;