import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login, LoginModel } from '../../services/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/rootReducer';

type LoginState = {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginState>({
    email: '',
    password: ''
  });
  
  const { isAuthenticated } = useSelector((state: RootState) => state.Auth);
  const { email, password } = formData;
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
		dispatch(login(new LoginModel(email, password)));
	};

  // redirect if logged in
	if (isAuthenticated)
		return <Redirect to='/landing' />;

  return (
    <React.Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
        </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            required
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            required
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'> Register</Link>
      </p>
    </React.Fragment>
  );
}

export default Login;