import './App.css';

import { React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

//Components
import Table from './components/table';
import UserDetail from './components/userDetail';
import PageNotFound from './components/page_not_found';
import allActions from './actions/index';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios.get('https://randomuser.me/api/?results=100').then((res) => {
        dispatch(allActions.userActions.setUser(res.data.results));
      });
    } catch (error) {
      console.log('Error in Fetching Users API Data => ', error);
    }
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Table />}></Route>
          <Route exact path="/details/:id" element={<UserDetail />}></Route>
          <Route exact path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
