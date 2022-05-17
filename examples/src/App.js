import logo from './logo.svg';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav
          style={{
            borderBottom: 'solid 1px',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            flex: 1,
            color: 'fff',
          }}
        >
          <Link to="/Dashboard">
            <button>Dashboard</button>
          </Link>
          <Link to="/List">
            <button>List</button>
          </Link>
          <Link to="/About">
            <button>About</button>
          </Link>
        </nav>
      </header>
      <h1>Welcome to our tutorials</h1>
      <Outlet />
    </div>
  );
}

export default App;
