import React from "react";
import { useState, useEffect } from "react";

const Register = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (!isNaN(values.username)) {
      errors.username = "Username Must be Letters";
    } else if (values.username.length < 3) {
      errors.username = "Username Must be 3 letters or more!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be 4 characters or more";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <body>
      <div class="container-fluid">
        <div className="he"></div>
        <div className="row">
          <section id="content" className="">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="text-center alert alert-light mx-auto py-5 w-75 mt-85 ">
                <h3>YOUR ORDER SEND SUCCESSFULLY </h3>
                <p className="text-warning">Wait for your order</p>
              </div>
            ) : (
              <pre></pre>
            )}
            <form action="" onSubmit={handleSubmit} className="py-5 mb-5">
              <h1>Login</h1>
              <div className="text-center">
                <input
                  type="text"
                  name="username"
                  placeholder="UserName"
                  id="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.username}</p>
              <div className="text-center">
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  id="apellidoP"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="text-center">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
              <div className="text-center pb-5">
                <input type="submit" value="Login" />
                <a href="#">Fotget Password?</a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </body>
  );
};

export default Register;
