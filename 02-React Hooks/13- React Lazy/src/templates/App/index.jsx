import React, { Suspense, useState } from 'react';
// import LazyComponent from '../components/LazyComponent';

const loadComponent = () => import('../components/LazyComponent');
const LazyComponent = React.lazy(loadComponent);

export const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
                SHOW {show ? 'LC on screen' : 'LC off screen'}
            </button>
            <Suspense fallback={<p>Carregando...</p>}>{show && <LazyComponent />}</Suspense>
        </>
    );
};

export default Home;
