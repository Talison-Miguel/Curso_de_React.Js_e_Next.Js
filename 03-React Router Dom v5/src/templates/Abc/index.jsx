import { useParams } from 'react-router-dom';

export function Abc() {
  const { id } = useParams();

  return <h1>Hello WORD ABC_id = {id}</h1>;
}
