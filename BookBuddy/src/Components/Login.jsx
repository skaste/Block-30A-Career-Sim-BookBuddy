import React, { useState } from 'react'

const Login = ({}) => {

const [email, setEmail]=useState("");
const [password, setPassword]=useState("");

const handleLogin = () => {
  fetch( 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
}


  return (
    <div>Login</div>
  )
}
export default Login;