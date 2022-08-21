import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Link, Switch} from 'react-router-dom';
import AllGalleries from './components/AllGalleries';
import MyGalleries from './components/MyGalleries'
import Gallery from './components/Gallery'
import Login from './components/Login'
import Register from './components/Register'
import {useEffect, useState} from "react";
import Nav from './components/Nav';
import CreateGallery from './components/CreateGallery';

function App() {
  const [first_name,setFname] = useState('');
  useEffect(()=> {
    (
        async () => {
            const response = await fetch('http://localhost:8000/api/user', {
                headers: {'Content-type' : 'application/json'},
                credentials: 'include',
            });
            
            const content = await response.json();
            setFname(content.first_name)
        }
    )();
});

  return (
    <div>
    <Nav first_name={first_name} setFname={setFname}/>
    <div className='container bg-light'>
      <Switch>
        <Route exact path="/" component={()=><AllGalleries first_name={first_name}/>} />
        <Route exact path="/gallery/id" component={Gallery} />
        <Route exact path="/login"  component={()=><Login setFname={setFname}/>}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/create-gallerie" component={CreateGallery} />
        <Route exact path="/my-galleries" component={MyGalleries} />
      </Switch>
    </div>
    </div>
  );
}

export default App;
