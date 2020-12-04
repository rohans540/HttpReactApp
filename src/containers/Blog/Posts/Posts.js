import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount() {
        axios.get('/posts')
            .then(resp => {
                const posts = resp.data.slice(0, 6);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Rohan'
                    }
                })
                this.setState({posts: updatedPosts});
                console.log(resp);
            })
            .catch(error => {
                console.log(error);
            })
    };

    selectPostHandler = (id) => {
        this.props.history.push({
            pathname: '/posts/'+id
        });
    };

    render () {

        const posts = this.state.posts.map(post => {
            return (
                <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.selectPostHandler(post.id)}
                    />)
        });
        
        return (
            <section className="Posts">
                    {posts}
            </section>
        )
    }
};

export default Posts;