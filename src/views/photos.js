import React from "react";
import axios from "axios";

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

        <div key={item.id} onClick={()=>{
            this.setUser(item.id)
          }}><img style={{width:100+"px",height:100+"px"}} src={item.url}/></div>

      );
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
      <div>
      <div onClick={()=>{
        this.setView("albums")
      }}>Back</div>
      <ul>
        {this.state.photos}
      </ul>
      </div>

    );
  }
}
export default PhotoView;
