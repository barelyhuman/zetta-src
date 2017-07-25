import React from "react";

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
        <div key={item.id} onClick={()=>{
          this.setAlbum(item.id)
        }}><li >{item.title}</li></div>
      );
      this.setState({
        albums:alblist
      });
    });
  }

  render(){
    console.log(this.state.albums);
    return(
      <div>
      <div onClick={()=>{
        this.setView("users")
      }}>Back</div>
      <ul>
        {this.state.albums}
      </ul>
      </div>
    )
  }
}

export default AlbumView;
