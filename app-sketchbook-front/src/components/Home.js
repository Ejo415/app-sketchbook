import React from "react";


const Home = () => {

  return (
    <div>
      <h1>Welcome to</h1>
      <h1>App</h1>
      <img src={process.env.PUBLIC_URL + "/s_logo.png"} width="500" alt="logo" />
    </div>
  );
};

export default Home;
