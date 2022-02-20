import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3001/produtos/";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        nome: "Hello World!",
        descricao: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}