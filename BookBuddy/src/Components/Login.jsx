import React, { useState } from "react";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = response.json();
    console.log(result);
    //save the token to session storage when logged in
    sessionStorage.setToken("token", result.token);
    //update isLoggedIn state
    setIsLoggedIn(true);
  };

  return (
    <>
      <div className="formBox">
        <h2 id="login">Login</h2>
        <div>
          <label id="direction">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label id="direction">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
};
export default Login;
