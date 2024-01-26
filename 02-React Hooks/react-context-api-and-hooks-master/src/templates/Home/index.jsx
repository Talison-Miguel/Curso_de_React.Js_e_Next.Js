import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <h1>Ola mundo !!</h1>
    </div>
  );
};
