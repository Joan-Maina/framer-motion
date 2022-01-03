import React, { useState } from "react";

function Pagination({ todos, paginate, postsPerPage }) {
  const pageNumbers = [];

  const totalPosts = todos.length;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const style = {
    display: "flex",
  };

  return (
    <div style={style}>
      {pageNumbers.map((num) => (
        <li
          key={num}
          style={{ listStyle: "none", margin: "5px", border: "1px solid grey" }}
        >
          <a onClick={() => paginate(num)}>{num}</a>
        </li>
      ))}
    </div>
  );
}

export default Pagination;
