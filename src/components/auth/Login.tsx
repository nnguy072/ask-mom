import React from 'react';
import { Link } from 'react-router-dom';
import { login, LoginModel, testLogin } from '../../services/auth';
import { useDispatch } from 'react-redux';

type LoginProps = {
}

type LoginState = {
  email: string;
  password: string;
}

export default class Login extends React.PureComponent<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  private onSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();

    console.log('here?');

    testLogin();
    // dispatch(login(new LoginModel(this.state.email, this.state.password)));
  }

  private onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    
    this.setState({ [event.target.name]: event.target.value } as LoginState);
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Sign Into Your Account
        </p>
			<form className='form' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={this.state.email}
              required
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              required
              onChange={this.onChange}
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
}