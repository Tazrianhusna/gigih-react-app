import logo from './logo.svg';
import Track from './components/Track';
import Login from './components/Login';
import Auth from './components/Auth';

const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY

function App() {
  return (
    <Auth />
  );
}

export default App;
