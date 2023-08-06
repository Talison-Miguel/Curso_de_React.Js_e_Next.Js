import './style.css';

import { Component } from 'react';

import loadPosts from '../../utils/load-posts';
import Posts from '../../components/Posts/index';
import { Button } from '../../components/Button';

class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 10,
    }

    async componentDidMount() {
        await this.laodPosts()
    }

    laodPosts = async () => {
        const postsAndPhotos = await loadPosts();
        const { page, postsPerPage } = this.state
        this.setState({
            posts: postsAndPhotos.slice(page, postsPerPage),
            allPosts: postsAndPhotos
        })
    }

    loadMorePosts = () => {
        const {
            page,
            postsPerPage,
            allPosts,
            posts
        } = this.state
    
        const nextPage = page + postsPerPage
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts)
    
        this.setState({ posts, page: nextPage})
    }

    render() {
        const { posts,page, postsPerPage, allPosts } = this.state
        const noMorePosts = page + postsPerPage >= allPosts.length

        return (
            <section className='container'>
                <Posts posts={posts}/>
                <div className='button-container'>
                    <Button 
                        text="Load More Posts"
                        disabled={noMorePosts}
                        Click={this.loadMorePosts}
                    />
                </div>
            </section>
        )
    };
}

export default Home;
