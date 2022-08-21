import {useEffect,useState} from 'react';
function  Gallery() {
    const [title,setTitle] = useState('');

  useEffect(()=> {
    (
        async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
                headers: {'Content-type' : 'application/json'},
                credentials: 'include',
            });
            
            const content = await response.json();
            console.log(content)
            setTitle(content.title)
        }
    )();
});
return (
    <div>
        <h1>{title}</h1>
    </div>
)
}

export default Gallery;