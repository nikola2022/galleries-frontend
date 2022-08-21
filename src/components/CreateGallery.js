import { useState } from "react";
import { Redirect } from "react-router-dom";

const CreateGallery = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const author_id = '1';
    const [images,setImages] = useState('');
    const [redirect,setRedirect] = useState(false)

    const submit = async (e,SyntheticEvent) =>{
        e.preventDefault();
        setRedirect(true);
        const response = await fetch('http://localhost:8000/api/create-gallerie', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                title,
                description,
                author_id,
                images
            })
        });
        const content = response.json();
    }
    if(redirect){
        return <Redirect to="/"/>;
    }
    return(
        <div className="mt-3">
        <form className="Auth-form mt-2 p-5" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create Gallery</h3>
          <div className="form-group mt-3">
            <label>Title</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter title"
              required
              onChange={e=> setTitle(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Desription</label>
            <textarea
              cols="50"
              rows="4"
              type="text-area"
              className="form-control mt-1"
              placeholder="Enter description"         
              required
              onChange={e=> setDescription(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Images</label>
            <input
              type="url"
              className="form-control mt-1"
              placeholder="Enter url of image"
              required
              onChange={e=> setImages(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </form>
        </div>
    )
}
export default CreateGallery;