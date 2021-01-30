const child = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("p", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
