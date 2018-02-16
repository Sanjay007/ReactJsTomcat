import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';

import Home from './Home.jsx';
import ContactUs from './ContactUs.jsx';
import Blog  from './Blog.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <div>
            <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contactUs">Contact Us</Link></li>
            </ul>
            <Switch>
              <Route path="/blog" component={Blog}/>
              <Route path="/contactUs" component={ContactUs}/>
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
