import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';

class AddImage extends Component {

    state = { img: null, caption: null }

    handleChange = (e) => {
        // get the files
        let files = e.target.files;
        let file = files[0];
        // Make new FileReader
        let reader = new FileReader();
        // Convert the file to base64 text
        reader.readAsDataURL(file);
        // on reader load somthing...
        reader.onload = () => {
            let fileInfo = {
                name: file.name,
                type: file.type,
                size: Math.round(file.size / 1000) + ' kB',
                base64: reader.result,
                file: file,
            };
            //console.log(fileInfo);
            this.setState({ img: fileInfo })
        } // reader.onload
    }

    handleCaptionChange = (e) => {
        this.setState({ caption: e.target.value });
    }

    handleOnPost = (e) => {
        const val = {
            "imageDet": this.state.img,
            "caption": this.state.caption
        }
       //console.log(val);
        this.props.addPost(val);
    }

    render() {
        return (
            <div>
                Post Image: <input type="file" name="addImage" onChange={this.handleChange} /><br />
                Add Caption: <input type="text" name="caption" onChange={this.handleCaptionChange} /> &nbsp;
                <button className="btn btn-primary" onClick={this.handleOnPost} >Post Image</button>
            </div>
        )
    }
}

export default connect(null, { addPost })(AddImage);