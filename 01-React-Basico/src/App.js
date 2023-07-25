import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.laodPosts()
    }

    laodPosts = async () => {
        const postResponse = fetch('https://jsonplaceholder.typicode.com/posts')
        const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

        const [posts, photos] = await Promise.all([postResponse, photosResponse])
    
        const postsJson = await posts.json()
        const photosJson = await photos.json()

        const postsAndPhotos = postsJson.map((post, index) => {
            return { ...post, cover: photosJson[index].url }
        })

        this.setState({posts: postsAndPhotos})
    }

    render() {
        const { posts } = this.state

        return (
            <section className='container'>
                <div className="posts">
                    {posts.map(el => (
                        <div className='post'>
                            <img src={el.cover} alt={el.title}></img>
                            <div key={el.id} className='postCard'>
                                <h1>{el.title}</h1>
                                <p>{el.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    };
}

export default App;
