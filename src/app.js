import React from 'react';
import { render } from 'react-dom';
import Child from './child';

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me"),
  //   React.createElement(child, {
  //     name: "Chikara",
  //     animal: "Cat",
  //     breed: "Stray",
  //   }),

  //   React.createElement(child, {
  //     name: "Bagga",
  //     animal: "Dog",
  //     breed: "German Shephered",
  //   }),

  //   React.createElement(child, {
  //     name: "Cookie",
  //     animal: "Dog",
  //     breed: "Unknown",
  //   }),
  // ]);

  return (
    <div>
      <h1>Adopt ME!</h1>
      <Child name = "Chikara" animal = "Cat" breed = "Stray" />
      <Child name = "Bagga" animal = "Dog" breed = "Derman Shephered" />
      <Child name = "Cookie" animal = "Dog" breed = "Arpit" />
    </div>
  )
};

render(<App />, document.querySelector("#root"));
