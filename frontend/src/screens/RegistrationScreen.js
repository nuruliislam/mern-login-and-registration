import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegistrationScreen(props) {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("object");
    console.log(userEmail);
    console.log(name);
    console.log(password);
    console.log(address);

    const fetchdata = async () => {
      try {
        const { data } = await axios.post("/registration", {
          name,
          userEmail,
          password,
          address,
        });

        console.log(data);
        props.history.push("/");
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
              <label htmlFor="name"> Name </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="email"> User Email </label>
              <input
                type="email"
                id="email"
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

            <div className="form-control">
              <label htmlFor="address"> Address </label>
              <input
                type="text"
                id="address"
                placeholder="Enter Address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <input type="submit" className="btn btn-submit" value="Login" />

            <div>
              <Link to="/">Login to your account </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
