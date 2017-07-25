import React from "react";
import axios from "axios";
import ImageCard from "../components/imagecard.js";

class PhotoView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      photos:null
    }
  }

  componentDidMount(){
    this.props.getData("photos?albumid="+this.props.albumid,(data)=>{
      let phlist = data.slice(0,5).map((item)=>
        <ImageCard key={item.id} url={item.url}/> );
      this.setState({
        photos:phlist
      })
    })
  }

  setAlbum=(id)=>{
    this.props.setter("userid",id);
  }

  setView=(view)=>{
    this.props.setter("view",view);
  }

  render(){
    console.log(this.state.photos);
    return(
      <div className="view">
      <div className="button" onClick={()=>{
        this.setView("albums")
      }}>Back</div>
      <div className="card-container">
      {this.state.photos}
      </div>
      </div>

    );
  }
}
export default PhotoView;
