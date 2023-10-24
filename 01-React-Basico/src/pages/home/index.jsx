import './style.css';

import { useEffect, useState, useCallback } from 'react';

import loadPosts from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(3);
    const [searchValue, setSearchValue] = useState('');

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
        const postsAndPhotos = await loadPosts();

        setPosts(postsAndPhotos.slice(page, postsPerPage));
        setAllPosts(postsAndPhotos);
    }, []);

    useEffect(() => {
        handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts, postsPerPage]);

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        setPosts(posts);
        setPage(nextPage);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    };

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filterPost = searchValue
        ? allPosts.filter((post) => {
              return post.title.toLowerCase().includes(searchValue.toLowerCase());
          })
        : posts;

    return (
        <section className="container">
            <div className="searchContainer">
                {!!searchValue && <h1>Search value: {searchValue}</h1>}

                <TextInput searchValue={searchValue} handleChange={handleChange} />
            </div>

            {filterPost.length > 0 && <Posts posts={filterPost} />}

            {filterPost.length === 0 && <p>Não Existem Posts</p>}

            <div className="button-container">
                {!searchValue && <Button text="Load More Posts..." disabled={noMorePosts} Click={loadMorePosts} />}
            </div>
        </section>
    );
};
// class Home2 extends Component {
//     state = {
//         posts: [],
//         allPosts: [],
//         page: 0,
//         postsPerPage: 2,
//         searchValue: ''
//     }

//     async componentDidMount() {
//         await this.laodPosts()
//     }

//     laodPosts = async () => {
//         const postsAndPhotos = await loadPosts();
//         const { page, postsPerPage } = this.state
//         this.setState({
//             posts: postsAndPhotos.slice(page, postsPerPage),
//             allPosts: postsAndPhotos
//         })
//     }

//     loadMorePosts = () => {
//         const {
//             page,
//             postsPerPage,
//             allPosts,
//             posts
//         } = this.state

//         const nextPage = page + postsPerPage
//         const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
//         posts.push(...nextPosts)

//         this.setState({ posts, page: nextPage})
//     }

//     handleChange = (e) => {
//         const { value } = e.target
//         this.setState({searchValue: value})
//     }

//     render() {
//         const { posts,page, postsPerPage, allPosts, searchValue } = this.state
//         const noMorePosts = page + postsPerPage >= allPosts.length

//         const filterPost = !!searchValue ?
//             allPosts.filter(post => {
//                 return post.title.toLowerCase().includes(
//                     searchValue.toLowerCase()
//                 )
//             })
//         : posts

//         return (
//             <section className='container'>

//                 <div className='searchContainer'>
//                     {!!searchValue && (
//                         <h1>Search value: {searchValue}</h1>
//                     )}

//                     <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
//                 </div>

//                 {filterPost.length > 0 && (
//                     <Posts posts={filterPost}/>
//                 )}

//                 {filterPost.length === 0 && (
//                     <p>Não Existem Posts</p>
//                 )}

//                 <div className='button-container'>
//                     {!searchValue && (
//                         <Button
//                             text="Load More Posts..."
//                             disabled={noMorePosts}
//                             Click={this.loadMorePosts}
//                         />
//                     )}
//                 </div>
//             </section>
//         )
//     };
// }

export default Home;
