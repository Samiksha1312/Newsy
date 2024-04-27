import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;

  //apiKey = process.env.REACT_APP_NEWS_API_KEY

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <HashRouter basename="/Newsy"> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar />  
          <Routes>
            <Route exact path="/Newsy" element={<News setProgress={this.setProgress} apiKey="1eb9b79742c545bf9280a552c61601e7" key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey="1eb9b79742c545bf9280a552c61601e7" key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey="1eb9b79742c545bf9280a552c61601e7" key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey="1eb9b79742c545bf9280a552c61601e7" key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey="1eb9b79742c545bf9280a552c61601e7" key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey="1eb9b79742c545bf9280a552c61601e7" key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey="1eb9b79742c545bf9280a552c61601e7" key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="1eb9b79742c545bf9280a552c61601e7" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

