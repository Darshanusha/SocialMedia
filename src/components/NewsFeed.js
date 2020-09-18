import React, { Component } from 'react';
import AddImage from './AddImage';
import DisplayPosts from './DisplayPosts';
import PerfectScrollbar from 'react-perfect-scrollbar'
class NewsFeed extends Component {
    render() {
        return (
            <PerfectScrollbar>
                <div className="container mt-2" >
                    <div className="row">
                        <div className="col-md-2 left-col" >Left</div>
                        <div className="col-md-7 border bg-light center-col" >
                            <div className="mt-2" >
                                <AddImage />
                                <center className="mt-2" > News Feed..</center>
                                <DisplayPosts />
                            </div>
                        </div>
                        <div className="col-md-3 right-col" >Right</div>
                    </div>
                </div>
            </PerfectScrollbar>
        );
    }
}

export default NewsFeed;