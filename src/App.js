import React from 'react';
import Home from './routes/Home';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Navi from './components/Navi';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navi/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/movie-detail"component={Detail}/>
    </HashRouter>
  );
}

export default App;
