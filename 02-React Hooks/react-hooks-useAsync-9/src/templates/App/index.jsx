import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');

    const run = useCallback(() => {
        setResult(null);
        setError(null);
        setStatus('pending');

        return asyncFunction()
            .then((response) => {
                setStatus('settled');
                setResult(response);
            })
            .catch((error) => {
                setStatus('error');
                setError(error);
            });
    }, [asyncFunction]);

    return [run, result, error, status];
};

const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const json = await data.json();
    return json;
};

export const Home = () => {
    const [posts, setPosts] = useState();
    const [reFetchData, result, error, status] = useAsync(fetchData);

    useEffect(() => {
        reFetchData();
    }, []);

    return <pre>{JSON.stringify(result, null, 2)}</pre>;
};

export default Home;
