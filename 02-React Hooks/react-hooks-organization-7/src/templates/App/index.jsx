import './styles.css';
import { PostsProvider } from '../contexts/PostsProvider';
import { Posts } from '../components/Posts';

//App.jsx
function App() {
    return (
        <PostsProvider>
            <div>
                <Posts />
            </div>
        </PostsProvider>
    );
}

export default App;
