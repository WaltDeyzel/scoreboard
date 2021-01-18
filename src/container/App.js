import React, { Component } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Route, Link } from 'react-router-dom';

import MainPage from "../container/MainPage/MainPage";
import UserProfilePage from "../container/UserProfilePage/UserProfilePage";
import UserStatsPage from "../container/UserStatsPage/UserStatsPage";
import ToDoPage from "../container/ToDoPage/ToDoPage";
import Header from '../components/Head/Head';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Navbar/Navbar';

class App extends Component {
  
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Header />
            <NavBar />
            <Route path="/" exact component={MainPage}/>
            <Route path="/user-profile" component={UserProfilePage}/>
            <Route path="/user-stats" exact component={UserStatsPage}/>
            <Route path="/to-do" component={ToDoPage}/>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;