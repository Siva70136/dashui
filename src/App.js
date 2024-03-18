import Cookies from 'js-cookie';
import Login from './Components/Login'
import Home from './Components/Dashboard'
import './App.css';

function App() {
  const token = Cookies.get('jwt');
  return (
    <div className="App">
      {token ? <Home /> : <Login />}
    </div>
  );
}

export default App;
