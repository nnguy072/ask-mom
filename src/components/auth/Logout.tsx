import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/auth';

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  dispatch(logout());

  return <Redirect to="/" />;
}

export default Logout;