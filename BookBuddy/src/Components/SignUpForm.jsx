import React from "react";
import { useState } from "react";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("testing");

    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result);
      // .then((response) => response.json())
      // .then((result) => {
      //   console.log(result);
      // })
      // .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Firstname:{""}
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <label>
          Lastname:{""}
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <label>
          Email:{""}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          Password:{""}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button id="signUpButton">Register!</button>
      </form>
    </>
  );
};

export default SignUpForm;
