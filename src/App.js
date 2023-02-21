import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar'  
import NewsItem from './Components/NewsItem'
import LoadingBar from 'react-top-loading-bar'

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

export default class App extends Component {
  pageSize=15;

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        />
        <NavBar/>
          <Routes>
          <Route exact path='/' element={<NewsItem setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
          <Route exact path='/business' element={<NewsItem setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>} />
          <Route exact path='/entertainment' element={<NewsItem setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
          <Route exact path='/health' element={<NewsItem setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>} />
          <Route exact path='/science' element={<NewsItem setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>} />
          <Route exact path='/sports' element={<NewsItem setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
          <Route exact path='/technology' element={<NewsItem setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

  /* ALT + SHIFT then select rangfe of arrow by clicking two points.... also END key*/
    

