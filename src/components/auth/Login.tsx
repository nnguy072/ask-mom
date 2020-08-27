import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login, LoginModel } from '../../services/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/rootReducer';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
declare type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

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

  const onChange = (e: React.ChangeEvent<FormControlElement>) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
		dispatch(login(new LoginModel(email, password)));
	};

  // redirect if logged in
	if (isAuthenticated)
		return <Redirect to='/landing' />;

  return (
    <Row>
      <Col></Col>
      <Col md={6} xl={3}>
        <Card className="mt-3">
          <Card.Body>
            <div className="text-center">
              <h1 className='large text-primary'>Sign In</h1>
              <p className='lead'>Sign Into Your Account</p>

              <Form onSubmit={e => onSubmit(e)}>
                <Form.Group>
                  <Form.Control type="email"
                                placeholder='Email Address'
                                name='email'
                                value={email}
                                required
                                onChange={e => onChange(e)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                required
                                onChange={e => onChange(e)}
                  />
                </Form.Group>

                <Button className="w-100" 
                        variant="primary" 
                        type="submit">
                  Submit
                </Button>
              </Form>

              <p className='mt-3 small'>
                Don't have an account? 
                <Link to='/register'> Register</Link>
              </p>

            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default Login;