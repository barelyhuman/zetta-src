import React from "react";
import axios from "axios";

import UserCard from "../components/usercard.js";

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
        <UserCard key={item.id} onClick={()=>this.setUser(item.id)} name={item.name}/>
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
      <div className="view">
        <div className="card-container">
        {this.state.users}</div>
      </div>



    );
  }
}
export default UsersView;
