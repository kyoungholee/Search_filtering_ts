import React, { useState } from "react";
import "./App.css";
import { Users } from "./user";
import Table from "./Table/Table";

function App() {
  const [query, setQuery] = useState("");

  const filterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <label htmlFor="text"></label>
      <input
        type="text"
        className="search"
        id="text"
        placeholder="Search..."
        onChange={filterChange}
      />
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((data) => (
          <li key={data.id} className="listItem">
            {data.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
