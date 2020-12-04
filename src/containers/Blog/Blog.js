import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink } from 'react-router-dom';
import Post from './FullPost/FullPost';

class Blog extends Component {
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink exact to="/new_post">Create Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new_post" exact component={NewPost} />
                    <Route path="/posts/:id" exact component={Post} />
            </div>
        );
    }
}

export default Blog;