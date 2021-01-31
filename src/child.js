import React from 'react';

export default function child ({ name, animal, breed }) {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     React.createElement("p", {}, breed),
//   ]);
    return (
        <div>
            <h1>{name}</h1>
            <h2>{animal}</h2>
            <p>{breed}</p>
        </div>
    )
};
