import React from 'react';
import HomePage from './pages/HomePage';
//import 'whatwg-fetch';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <br/><br/><br/><br/><br/>
      <div className="page-body">
        <Switch>
    <Route path="/" component={HomePage}  exact/>
    <Route path="/About" component={AboutPage}/>
    <Route path="/ArticleList" component={ArticleList}/>
    <Route path="/ArticlePage/:name" component={ArticlePage}/>
    <Route component={NotFoundPage}></Route>
    </Switch>
      </div>
    </div>
    </Router>
  );
  
}

export default App;
