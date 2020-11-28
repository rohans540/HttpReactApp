import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

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
        this.setState({selectedPostId: id})
    };

    render () {

        const posts = this.state.posts.map(post => {
            return <Post 
                        title={post.title} 
                        key={post.id} 
                        author={post.author}
                        clicked={() => this.selectPostHandler(post.id)}
                    />
        });
        
        return (
            <section className="Posts">
                    {posts}
            </section>
        )
    }
};

export default Posts;