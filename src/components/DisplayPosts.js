import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions";
import DisplayPost from './DisplayPost';
class DisplayPosts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                {
                    this.props.posts.map((post) => {
                        return <div key={post.id} > <DisplayPost img={post.imageDet && post.imageDet.base64} id={post.id} caption={post.caption} /> </div>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: Object.values(state.posts) }
}


export default connect(mapStateToProps, { fetchPosts })(DisplayPosts);