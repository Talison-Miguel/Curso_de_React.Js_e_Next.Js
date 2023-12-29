/* eslint-disable react/prop-types */
import { forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
    const [counted, setCounted] = useState([0, 1, 2, 3]);

    const handleClick = () => {
        setCounted((c) => [...c, +c.slice(-1) + 1]);
        divRef.current.handleClick();
    };

    const divRef = useRef();

    useLayoutEffect(() => {
        const now = Date.now();
        while (Date.now() < now + 300) divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
    });

    return (
        <>
            <button onClick={handleClick}>Count {counted.slice(-1)}</button>
            <DisplayCounted counted={counted} ref={divRef}></DisplayCounted>
        </>
    );
};

// eslint-disable-next-line react/prop-types
export const DisplayCounted = forwardRef(function DisplayCounted({ counted }, ref) {
    const [rand, setRand] = useState('0.24');
    const divRef = useRef();

    const handleClick = () => {
        setRand(Math.random().toFixed(2));
    };

    useImperativeHandle(ref, () => ({
        handleClick,
        divRef: divRef.current,
    }));

    return (
        <div ref={divRef} style={{ height: '100px', width: '100px', overflow: 'scroll', padding: '10px' }}>
            {counted.map((c) => {
                return (
                    <p onClick={handleClick} key={`c-${c}`}>
                        {c} +++ {rand}
                    </p>
                );
            })}
        </div>
    );
});

export default Home;
