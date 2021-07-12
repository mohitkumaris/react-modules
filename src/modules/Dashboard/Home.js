import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mohit");
  const [text, setUpdateText] = useState("");

  const handleClick = () => {
    setName("lovey");
  };
  const handleChange = (e) => {
    setUpdateText(e);
  };

  return (
    <div>
      Home of {name}
      <br />
      <button onClick={handleClick}>Change Name</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
      <span>{text}</span>
    </div>
  );
};

export default Home;
