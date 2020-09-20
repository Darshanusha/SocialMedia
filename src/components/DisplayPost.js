import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DisplayPost extends Component {

    onClick = (e) => {
        console.log("Disp post ", e)
    }

    render() {
        return (
            <div className="card mt-3" onClick={this.onClick} >
                <Link to = {`/view/post/${this.props.id}`} >
                    <center>
                        <img src={this.props.img} width="400" height="300" alt={this.props.caption} />
                    </center>
                    <hr />
                    <label className="card-body">{this.props.caption}</label>
                </Link>
            </div>
        )
    }
}

export default DisplayPost;