import React from "react";
import axios from "axios";

class UsersView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      users:null
    }
  }

  componentDidMount(){
    this.props.getData("users",(data)=>{
      let users = data.map((item)=>
        <div key={item.id} onClick={()=>{
          this.setUser(item.id)
        }}><li >{item.name}</li></div>
      );
      this.setState({
        users:users
      })
    })
  }

  setUser=(id)=>{
    this.props.setter("userid",id);
    this.setView("albums");
  }

  setView=(view)=>{
    this.props.setter("view",view);
  }

  render(){
    return(
      <ul>
        {this.state.users}
      </ul>
    );
  }
}
export default UsersView;
