import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { Route, Router, Routes } from 'react-router-dom';
import SearchResults from './views/SearchResults';

function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <Home/>
    </div>
  );
}

export default App;
