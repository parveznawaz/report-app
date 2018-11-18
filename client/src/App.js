import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarMenu from "./components/layout/NavbarMenu";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import SrScheduleReportGroupByCompany from "./components/serviceRequestReports/SrScheduleReportGroupByCompany";
import { Provider } from "react-redux";
import store from './redux/store';
import './App.css';
import '@progress/kendo-theme-material/dist/all.css';
//import '@progress/kendo-ui';

class App extends Component {
  render() {
    return (
      <Provider store={store}>      
        <Router>
          <div className="App">
            <NavbarMenu />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/srScheduleReportGroupByCompany" component={SrScheduleReportGroupByCompany} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

