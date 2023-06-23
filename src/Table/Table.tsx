import React from "react";
import { PostProps } from "../types";

interface datainfo {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

export default function Table({ data }: datainfo) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((item: datainfo) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
