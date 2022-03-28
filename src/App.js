import logo from './logo.svg';
import Track from './components/Track';

const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY

function App() {
  return (
    <Track />
  );
}

export default App;
