import './App.css';

import NavBar from './Components/NavBar'  
import NewsItem from './Components/NewsItem'
import LoadingBar from 'react-top-loading-bar'
import React, {useState} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

const App=()=>{
  const pageSize=15;
  const apiKey=process.env.REACT_APP_API_KEY
//Name -> API_KEY worng || REACT_APP_API_KEY correct
  
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <NavBar/>
          <Routes>
          <Route exact path='/' element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path='/business' element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} />
          <Route exact path='/entertainment' element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route exact path='/health' element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>} />
          <Route exact path='/science' element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route exact path='/sports' element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>} />
          <Route exact path='/technology' element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
}

  /* ALT + SHIFT then select rangfe of arrow by clicking two points.... also END key*/
    
export default App
