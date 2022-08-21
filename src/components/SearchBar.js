import { useEffect, useState } from "react"

export default function SearchBar(){
    const [value,setValue] = useState('')
    const [result,setResult] = useState('')
    useEffect(()=>
    {
        if(value.length > 0) {
            fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(
                response => response.json()
            ).then(responseData => {
                let searchQuery = value.toLowerCase();
                for(const key in responseData) {
                    let gallerie = responseData[key].title.toLowerCase();
                    if(gallerie.slice(0,searchQuery.length).indexOf(searchQuery) !== -1) {
                        setResult((prevResult) => {
                            return[...prevResult,responseData[key].title]
                        })
                    }
                }
            })
        }
    })
    return(
        <div class="input-group p-3 mt-3">
            <input type="search" class="form-control rounded" placeholder="Search" 
            aria-label="Search" 
            aria-describedby="search-addon"
            onChange={e=>setValue(e.target.value)} />
            <button type="button" class="btn btn-outline-primary">Filtriraj</button>
        </div>
    )

}