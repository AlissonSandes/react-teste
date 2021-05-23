import React, { useState } from "react";

const userList = () => {
  const users = useState([
    { username: "admin", password: "admin" },
    { username: "bianca", password: "zephyr" },
  ]);
  return (
    <div>
      {users.map((user) => (
        <li>{user.username}</li>
      ))}
    </div>
  );
};
export default state;
