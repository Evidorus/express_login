import React, {useState} from "react";
import {useHistory} from 'react-router'


export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory()


    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const connexion = (e) => {
        fetch('http://localhost:8000/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }).then((response) => {
            return response.json()
        }).then((response) => {
          const token = response.token;
          console.log(token)
          localStorage.setItem('token', token)
            if (response.success === true){
                history.push("/admin")
            }
        })
        e.preventDefault();
    }
  return (
    <>
      <h1 className="text-center">Login form</h1>
      <form
        className="form-group needs-validation container-fluid"
        onSubmit={connexion}>
        <div className="row">
          <div className="col-8">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="enter email ..."
              name="email"
              className="form-control"
              required
              onChange={onChangeEmail}
            />
          </div>
          <div className="col-8">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter password ..."
              className="form-control"
              required
              onChange={onChangePassword}
            />
          </div>
          <div className="col-8">
            <input
              type="submit"
              disabled={!email || !password}
              value="Connexion"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </>
  );
}
