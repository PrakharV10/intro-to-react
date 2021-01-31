import React from 'react';

export default function child ({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("p", {}, breed),
  ]);
};
