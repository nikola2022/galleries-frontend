import Galleries from './Galleries'
import { Provider } from 'react-redux'
import store from '../saga/store'
import SearchBar from './SearchBar'

export default function AllGalleries(props,{first_name:string}) {
    return(
        <div>
        <SearchBar />
        <hr/>
        <Provider store={store}>
        <Galleries />
        </Provider>
        </div>
    )
}