import { useCounterContext } from '../../contexts/CounterContext';

export function Heading() {
  const [state, actions] = useCounterContext();

  return <h1 style={{ fontSize: '60px' }}>{state.counter}</h1>;
}
