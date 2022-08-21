import { SyntheticEvent } from "react";
import { useState } from "react";
import {Redirect} from 'react-router-dom';
export default function Register() {
    const [first_name,setFname] = useState('');
    const [last_name,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false)
    
    const submit = async(e,SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            })
        });
        setRedirect(true)
    }
    if(redirect){
    return <Redirect to="/login"/>;
    }
    
    return(
        <div className="Auth-form-container p-2 mt-4">
      <form className="Auth-form mt-2 p-5" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter first name"
              required
              onChange={e=> setFname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter last name"
              required
              onChange={e=> setLname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
              onChange={e=> setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
              onChange={e=> setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter confirm password"
            />
          </div>
          <div class="checkbox mt-1">
    <label>
      <input type="checkbox" id="chkbox1" runat="server" required /> I accept terms and conditions
    </label>
  </div>
          <checkbox></checkbox>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
    )
}