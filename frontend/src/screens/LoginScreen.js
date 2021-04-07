import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginScreen(props) {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("object");
    console.log(userEmail);
    console.log(password);

    const fetchdata = async () => {
      try {
        const { data } = await axios.post("/login", {
          userEmail,
          password,
        });

        console.log(data);
        props.history.push("/home");
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  };

  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <label htmlFor="username"> User name </label>
              <input
                type="email"
                id="username"
                placeholder="Enter User Email"
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <input type="submit" className="btn btn-submit" value="Login" />

            <div>
              <Link to="/register">Create Your account</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
