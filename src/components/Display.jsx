import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Display({ data }) {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getTodos();

    async function getTodos() {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setLoading(false);
      setTodo(data);
    }
  }, []);

  const indexoflastpost = currentPage * postsPerPage;
  const indexoffirstpost = indexoflastpost - postsPerPage;
  const currentposts = todo.slice(indexoffirstpost, indexoflastpost);

  const paginate = (num) => {
    setCurrentPage(num);
  };

  return (
    <>
      {loading ? <h1>Loading...</h1> : <h2>Todos</h2>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">User ID</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          {currentposts?.map((todo) => (
            <tr key={todo.id}>
              <th scope="row">{todo.id}</th>
              <td>{todo.title}</td>
              <td>{todo.userId}</td>
              <td>{todo.completed ? "completed" : "in progress"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {todo == undefined ? (
        <p>wait</p>
      ) : (
        <Pagination
          todos={todo}
          paginate={paginate}
          postsPerPage={postsPerPage}
        />
      )}
    </>
  );
}

export default Display;
