import { Link } from "react-router-dom"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


import { requestApiData } from "../saga/actions";
import React from "react";
class Galleries extends React.Component{
    componentDidMount() {
        this.props.requestApiData();
      }
    
      users = (x,i) =>
        <div key={x.id} className="border rounded p-4 mt-5  bg-white">
          <h1>
          <Link to={'/gallery/id'}>{x.title}</Link>
          </h1>
          <img width="100%" src={x.url} />
          <h4 className="text-center mt-2">By: <Link to={'/author/id'}>Marko</Link></h4>
          <h4 className="mt-4 text-center">Created at: 2022/08/19 00:32</h4>
        </div>;
    
      render() {
        const  results = this.props.data;
        console.log(this.props.data)
        console.log(results)
        return results.length
          ? <div className="container">
              { results.map(this.users)}
            </div>
          : <h1>loading...</h1>;
      }
    }
    
    const mapStateToProps = state => ({ data: state.data });
    
    const mapDispatchToProps = dispatch =>
      bindActionCreators({ requestApiData }, dispatch);
// const Gallery = () => {
//     return(

//         <div className="container border rounded p-4 mt-5">
//             <h1><Link to={'/gallery/id'}>title</Link></h1>
//             <img className="mt-3" width="100%" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
//             <h4 className="text-center mt-2">By: <Link to={'/author/id'}>Marko</Link></h4>
//             <h4 className="mt-4 text-center">Created at: 2022/08/19 00:32</h4>
//         </div>
        
//     )
// }
// export default Gallery;
export default connect(mapStateToProps, mapDispatchToProps)(Galleries);