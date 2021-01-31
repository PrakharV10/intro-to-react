import React from 'react';
import { render } from 'react-dom';
import child from './child';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(child, {
      name: "Chikara",
      animal: "Cat",
      breed: "Stray",
    }),

    React.createElement(child, {
      name: "Bagga",
      animal: "Dog",
      breed: "German Shephered",
    }),

    React.createElement(child, {
      name: "Cookie",
      animal: "Dog",
      breed: "Unknown",
    }),
  ]);
};

render(React.createElement(App), document.querySelector("#root"));
