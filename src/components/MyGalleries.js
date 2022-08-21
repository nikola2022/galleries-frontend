import{useState,useEffect} from 'react';
import Galleries from './Galleries';
import { Provider } from 'react-redux';
import store from '../saga/store'
function MyGalleries() {
    const [first_name,setFname] = useState('');
    const [last_name,setLname] = useState('');
  useEffect(()=> {
    (
        async () => {
            const response = await fetch('http://localhost:8000/api/user', {
                headers: {'Content-type' : 'application/json'},
                credentials: 'include',
            });
            
            const content = await response.json();
            setFname(content.first_name)
            setLname(content.last_name)
        }
    )();
});

    return(
        <div className='mt-4'>
          Ime: <h1>{first_name}</h1> 
          Prezime: <h1> {last_name}</h1>
          <Provider store={store}>
          <Galleries />
          </Provider>
        </div>
    )
}
export default MyGalleries;