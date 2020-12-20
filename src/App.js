import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { requestUsers } from './redax/actions/users';
import { MainScens } from './scenss/MainScens/MainScens';




function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestUsers())
  }, [])

  return (<MainScens />);
}

export default App;
