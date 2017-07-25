import React,{Component} from "react";
import {render} from "react-dom";
import axios from "axios";


import UsersView from "./views/users.js";
import AlbumView from "./views/albums.js";
import PhotoView from "./views/photos.js";

const api_url = "https://jsonplaceholder.typicode.com/"

class App extends Component{
  state={
    view:"users",
    userid:null,
    albumid:null
  }

  setStateValue=(state,data)=>{
    this.setState({
      [state]:data
    });
  }

  getData=(urlparam,cb)=>{
    axios.get(api_url+urlparam).then((res)=>{
      cb(res.data);
    });
  }

  render(){
    let renderview;
    let view = this.state.view;
    let userid=this.state.userid;
    let albumid=this.state.albumid;
    if(view==="users"){
      view=<UsersView setter={this.setStateValue} getData={this.getData} />
    }
    else if(view==="albums"){
      view=<AlbumView setter={this.setStateValue} getData={this.getData} userid={userid}/>
    }

    else if(view==="photos"){
      view=<PhotoView setter={this.setStateValue} albumid={albumid} getData={this.getData}/>
    }
    return(
      <div id="app">
        {view}
      </div>
    );
  }

}

render(<App />,document.getElementById("root"));
