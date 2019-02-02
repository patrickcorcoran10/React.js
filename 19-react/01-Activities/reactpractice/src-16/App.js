import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends
  };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);

    this.setState({ friends });
  };

  render() {
    <Wrapper>
      <h1 className="title">Friends List</h1>
      {friends.map(f => {
        return (
        <FriendCard
        removeFriend={this.removeFriend}
        id={this.id}
        key={this.id}  
        name={this.name}
        image={this.image}
        occupation={this.occupation}
        location={this.location}
      />
        )}
      )};
    </Wrapper>
  };
}

export default App;
