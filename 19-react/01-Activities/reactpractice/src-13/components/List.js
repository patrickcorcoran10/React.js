import React from "react";

const List = props => (
  <ul className="list-group">
    {groceries.map(f => {
      name: f.name,
      purchased: f.purchased
    })}
    Using the map method, render one li element displaying the text property of
    each grocery object.
  </ul>
);

export default List;
