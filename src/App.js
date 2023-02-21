import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar'  
import NewsItem from './Components/NewsItem'
import LoadingBar from 'react-top-loading-bar'

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  apiKey=process.env.REACT_APP_API_KEY
//Name -> API_KEY worng || REACT_APP_API_KEY correct
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
          <Route exact path='/' element={<NewsItem setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
          <Route exact path='/business' element={<NewsItem setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>} />
          <Route exact path='/entertainment' element={<NewsItem setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
          <Route exact path='/health' element={<NewsItem setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>} />
          <Route exact path='/science' element={<NewsItem setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>} />
          <Route exact path='/sports' element={<NewsItem setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
          <Route exact path='/technology' element={<NewsItem setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

  /* ALT + SHIFT then select rangfe of arrow by clicking two points.... also END key*/
    

