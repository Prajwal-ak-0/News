import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar'  
import NewsItem from './Components/NewsItem'

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
          <Routes>
          <Route exact path='/' element={<NewsItem key="general" pageSize={this.pageSize} country="in" category="general"/>} />
          <Route exact path='/business' element={<NewsItem key="business" pageSize={this.pageSize} country="in" category="business"/>} />
          <Route exact path='/entertainment' element={<NewsItem key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
          <Route exact path='/health' element={<NewsItem key="health" pageSize={this.pageSize} country="in" category="health"/>} />
          <Route exact path='/science' element={<NewsItem key="science" pageSize={this.pageSize} country="in" category="science"/>} />
          <Route exact path='/sports' element={<NewsItem key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
          <Route exact path='/technology' element={<NewsItem key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

  /* ALT + SHIFT then select rangfe of arrow by clicking two points.... also END key*/
    

