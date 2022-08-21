import { Link } from "react-router-dom";
const Nav = (props) => {
  const logout = async() => {
      const response = await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        credentials: 'include',
    });
    props.setFname('');
  }

  let menu;
  
  if(props.first_name === '') {
    menu = (
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">All Galleries</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/register">Register</Link>
          </li>
        </ul>
    )
  } else {
    menu = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link text-light" to="/">All Galleries</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/my-galleries">My Galleries</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/create-gallerie">Create New Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/login" onClick={logout}>Logout</Link>
          </li>
        </ul>
    )
  }
    return(
    <div>
      <Link className="nav-link text-center text-info" to="/"><h1>GalleriesApp</h1></Link>
      <nav className="navbar navbar-expand-sm bg-info">
       {menu}
      </nav>
    </div>
      )
}

export default Nav;