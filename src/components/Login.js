import { SyntheticEvent,useState } from "react";
import {Redirect} from 'react-router-dom';

export default function Login(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false)

    const submit = async (e,SyntheticEvent) =>{
        e.preventDefault();
        setRedirect(true);
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        const content = response.json();
        props.setFname(content.first_name);
    }
    if(redirect){
        return <Redirect to="/"/>;
    }
    return(
        <div className="Auth-form-container m-5 p-2">
      <form className="Auth-form mt-2 p-5" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"         
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Log in 
            </button>
          </div>
        </div>
      </form>
    </div>
    )
}