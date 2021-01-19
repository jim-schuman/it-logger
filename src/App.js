import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from "./components/logs/AddLogModal";
import Logs from './components/logs/Logs';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    
      <Fragment>
        <SearchBar />
        <div className="container">
            <AddBtn />
            <AddLogModal />
            <Logs />
        </div>
      </Fragment>      
    
  );
}

export default App;
