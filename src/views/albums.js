import React from "react";
import AlbumCard from "../components/albumcard.js";

class AlbumView extends React.Component{
  constructor(props){
    super(props);

    this.state={
      albums:null
    }
  }

  setAlbum(id){
    this.props.setter("albumid",id);
    this.setView("photos");
  }

  setView=(view)=>{
    this.props.setter("view",view);
  }


  componentDidMount(){
    this.props.getData("albums?userId="+this.props.userid,(data)=>{
      let alblist = data.map((item)=>
        <AlbumCard key={item.id} onClick={()=>{this.setAlbum(item.id)}}
        title={item.title}/>
      );
      this.setState({
        albums:alblist
      });
    });
  }

  render(){
    console.log(this.state.albums);
    return(
      <div className="view">
      <div onClick={()=>{
        this.setView("users")
      }} className="button">Back</div>
      <div className="card-container">
        {this.state.albums}
      </div>
      </div>
    )
  }
}

export default AlbumView;
