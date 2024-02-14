import { useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

export function Abc() {
  const { id } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  return <h1>Hello WORD ABC_id = {id}</h1>;
}
