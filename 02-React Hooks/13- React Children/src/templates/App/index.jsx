// Compound Components
import { Children, cloneElement, createContext, useContext, useState } from 'react';

const s = {
    style: {
        fontSize: '60px',
    },
};

const TurnOnOffContext = createContext();

// eslint-disable-next-line react/prop-types
const TurnOnOff = ({ children }) => {
    const [isOn, setIsOn] = useState(false);
    const onTurn = () => setIsOn((s) => !s);

    return <TurnOnOffContext.Provider value={{ isOn, onTurn }}>{children}</TurnOnOffContext.Provider>;
};
// eslint-disable-next-line react/prop-types
const TurnedOn = ({ children }) => {
    const { isOn } = useContext(TurnOnOffContext);
    return isOn ? children : null;
};
// eslint-disable-next-line react/prop-types
const TurnedOff = ({ children }) => {
    const { isOn } = useContext(TurnOnOffContext);
    return isOn ? null : children;
};
const TurnButton = ({ ...props }) => {
    const { isOn, onTurn } = useContext(TurnOnOffContext);

    return (
        <button onClick={onTurn} {...props}>
            Turn {isOn ? 'OFF' : 'ON'}
        </button>
    );
};
// eslint-disable-next-line react/prop-types
const P = ({ children }) => <p {...s}>{children}</p>;

export const Home = () => {
    return (
        <TurnOnOff>
            <div>
                <header>
                    {' '}
                    <TurnedOff>
                        <P>Aqui vem as coisas do OFF.</P>
                    </TurnedOff>
                </header>
                <section>
                    <TurnedOn>
                        <P>Aqui as coisas que vão acontecer quando estiver ON.</P>
                    </TurnedOn>
                </section>
            </div>
            <TurnButton {...s} />
        </TurnOnOff>
    );
};

export default Home;
