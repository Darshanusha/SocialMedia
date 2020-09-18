import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import NavBar from './NavBar';
import NewsFeed from './NewsFeed';
import history from '../history/History';
import "../css/App.css";
import ViewBigPost from './ViewBigPost';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <NavBar />
                <Route exact component={ViewBigPost} path="/view/post/:id" />
                <Route exact component={NewsFeed} path="/" />
            </Router>
        )
    }
}

export default App;