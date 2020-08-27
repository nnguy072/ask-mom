import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/rootReducer';
import { Redirect } from 'react-router-dom';

const Blank: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.Auth);

  if (isAuthenticated)
    return <Redirect to="/landing" /> 
  else 
    return <Redirect to="/login" />
} 

export default Blank;