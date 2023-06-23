import React, { useState } from "react";
import "./App.css";
import { Users } from "./user";

function App() {
  const [query, setQuery] = useState("");

  const filterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  console.log(query);

  return (
    <div className="App">
      <label htmlFor="text"></label>
      <input
        type="text"
        className="search"
        id="text"
        placeholder="Search"
        onChange={filterChange}
      />
      <ul className="list">
        {Users.map((data) => (
          <li className="listItem">{data.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
