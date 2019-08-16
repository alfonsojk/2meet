import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar2meet from './components/common/Navbar2meet';
import routes from './Routes';
import Footer from './components/Footer';
function App() {
  return (
      <Router>
        <div className="">
        <Navbar2meet />
        </div>        
          <Switch>
              { routes }
          </Switch>
        <div>
          <Footer className="footer2"/>
        </div>
      </Router>
  );
}

export default App;
