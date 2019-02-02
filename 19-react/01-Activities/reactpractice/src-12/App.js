import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard"

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard />
    {/* <SpongeBobCard /> */}
    {/* <MrKrabsCard /> */}
    {/* <SquidwardCard /> */}
  </Wrapper>
);

export default App;
