import React, { Component } from 'react';
import AddImage from './AddImage';
import DisplayPosts from './DisplayPosts';
import { Scrollbars } from 'react-custom-scrollbars';
class NewsFeed extends Component {
    render() {
        return (

            <div className="container mt-2" >
                <div className="row">
                    <div className="col-md-2 left-col" >Left</div>
                    <div className="col-md-7" >
                        <Scrollbars style={{ width: "100%", height: "2500%" }} >
                            <div className="mt-1 border bg-light center-col" width = "90%"  >
                                <AddImage />
                                <center className="mt-2" > News Feed..</center>
                                <DisplayPosts />
                            </div>
                        </Scrollbars>
                    </div>
                    <div className="col-md-3 right-col" >Right</div>
                </div>
            </div>
        );
    }
}

export default NewsFeed;