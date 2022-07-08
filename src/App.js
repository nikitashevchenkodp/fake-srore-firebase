import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import AppRouter from './components/app-router/app-router';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {

  return (
      <Router>
        <div className='container'>
        <Header />
        <AppRouter />
        </div>
      </Router>
  );
}

export default App;
