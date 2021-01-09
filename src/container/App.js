import React, { Component } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';

import MainPage from "../container/MainPage/MainPage";
import Header from '../components/Head/Head';
import Layout from '../components/Layout/Layout';

class App extends Component {
  
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Header />
            <MainPage />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;