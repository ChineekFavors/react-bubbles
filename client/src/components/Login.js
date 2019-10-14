import React, {useState} from "react";

import {axiosWithAuth} from './utils/axiosWithAuth.js';

const Login = () => {
	const [credentials, setCredentials] = useState({username: '', password: ''});
	console.log(credentials);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
	const handleChange = e => {
		setCredentials({
			
				...credentials,
				[e.target.name]: e.target.value
			
		});
	}

	const login = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/login', credentials)
			.then(res => {
				localStorage.setItem('token', res.data.payload)
				props.history.push('/bubblePage')
			})
			.catch(err => console.log(err))
			
	}

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Enter username and password to login</p>
      <form onSubmit={login}>
	      <input 
	      	type='text'
	      	name='username'
	      	placeholder='enter user name'
	      	value={credentials.username}
	      	onChange={handleChange}
	      />
	      <input 
	      	type='password'
	      	name='password'
	      	placeholder='enter password'
	      	value={credentials.password}
	      	onChange={handleChange}
	      />
	      <button type='submit' onClick={login}>Login</button>
      </form>
    </>
  );
};

export default Login;
