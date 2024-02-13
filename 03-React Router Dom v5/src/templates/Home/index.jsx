import { useEffect, useState } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((response) => console.log(response))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={() => actions.setCOUNTER({ counter: 10 })}>Set 10</Button>
        <Button onButtonClick={() => actions.setCOUNTER({ counter: 100 })}>Set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          Async Increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          Async Error
        </Button>
      </div>
    </div>
  );
};
