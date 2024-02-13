import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav
      style={{ width: '100%', display: 'flex', justifyContent: 'space-around', height: '60px', alignItems: 'center' }}
    >
      <Link to={'/'}>Home</Link>
      <Link to={'/abc'}>Abc</Link>
    </nav>
  );
}
