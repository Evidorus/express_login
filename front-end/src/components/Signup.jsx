import React, { useState } from "react";
import {useHistory} from "react-router"
import Select from "react-select"

const options = [
  {value: 'paris', label: 'Paris'},
  {value: 'tokyo', label: 'Tokyo'},
  {value: 'los angeles', label: 'Los Angeles'}
]

export default function SignUp() {
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [birth, setBirth] = useState("")
  const [password, setPassword] = useState("");
  const [city, setCity] = useState(null)

  const history = useHistory()

  const addUser = (e) => {
    fetch("http://localhost:8000/signup",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        dateOfBirth: birth,
        surname: surname,
        firstName: firstName,
        email: email,
        confirmPassword: confirmPassword,
        city: city.value
      })
    }).then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.success === true){
        history.push('/created')
      }
    })
    e.preventDefault();
    
  }

  const onChangeEmail = (e) => {
    const newEmail = e.target.value;
    const reg = /^\S+@\S+\.\S+$/g;
    const isEmail = reg.test(newEmail);
    setEmail(newEmail);
    setEmailValid(isEmail);
  };

  const onChangePassword = (e) => {
    let newPasswordValid = false;
    if (e.target.value.length >= 8) {
      newPasswordValid = true;
    } else {
      newPasswordValid = false;
    }
    setPassword(e.target.value);
    setPasswordValid(newPasswordValid);
  };

  const onChangeConfirmPassword = (e) => {
    let newPasswordValid = false;
    if (e.target.value === password) {
      newPasswordValid = true;
    } else {
      newPasswordValid = false;
    }
    setConfirmPassword(e.target.value);
    setConfirmPasswordValid(newPasswordValid)
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const onChangeSurname = (e) => {
    setSurname(e.target.value)
  }
  const onChangeBirth = (e) => {
    setBirth(e.target.value)
  }
  return (
    <>
      <h1 className="text-center">Sign up form</h1>
      <form className="form-group needs-validation container-fluid"
        onSubmit={addUser}>
        <div className="row">
        <div className="col-8">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="enter first name ..."
              className="form-control"
              required
              onChange={onChangeFirstName}
            />
          </div>
          <div className="col-8">
            <label>Surname</label>
            <input
              type="text"
              name="Surname"
              placeholder="enter surname ..."
              className="form-control"
              required
              onChange={onChangeSurname}
            />
          </div>
          <div className="col-8">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              className="form-control"
              required
              onChange={onChangeBirth}
            />
          </div>
          <div className="col-8">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="enter email ..."
              name="email"
              className={
                emailValid ? "form-control is-valid" : "form-control is-invalid"
              }
              onChange={onChangeEmail}
            />
          </div>
          <div className="col-8">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter password ..."
              className={
                passwordValid
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              required
              onChange={onChangePassword}
            />
          </div>
          <div className="col-8">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter password ..."
              className={
                confirmPasswordValid
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              required
              onChange={onChangeConfirmPassword}
            />
          </div>
          <div className="col-8">
          <label>Select your city</label>
          <Select
          required
          options={options}
          onChange={setCity}/>
          </div>
          <div className="col-8">
            <input
              type="submit"
              disabled={!emailValid || !passwordValid || !confirmPasswordValid}
              value="Inscription"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </>
  );
}
