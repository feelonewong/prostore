import React from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const Homepage = async () => {
  await delay(1000);
  return <>ProStore</>;
};

export default Homepage;
