import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], error: null };
  }

  loadPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const posts = data.map(post => new Post(post.id, post.title, post.body));
        this.setState({ posts: posts });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        this.setState({ error: error });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    console.error("Component did catch an error:", error, info);
    alert("An error occurred in the component: " + error);
    this.setState({ error: error });
  }

  render() {
    const { posts, error } = this.state;
    if (error) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;