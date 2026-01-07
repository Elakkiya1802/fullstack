import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setPosts(res.data.slice(0, 5)));
  }, []);

  const addPost = () => {
    if (!title || !body) return alert("Fill all fields");
    axios.post(API_URL, { title, body, userId: 1 })
      .then(res => {
        setPosts([...posts, res.data]);
        setTitle("");
        setBody("");
      });
  };

  const startEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  const updatePost = () => {
    axios.put(`${API_URL}/${editId}`, { title, body, userId: 1 })
      .then(() => {
        setPosts(posts.map(p =>
          p.id === editId ? { ...p, title, body } : p
        ));
        cancelEdit();
      });
  };

  const deletePost = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setPosts(posts.filter(p => p.id !== id));
      });
  };

  const cancelEdit = () => {
    setEditId(null);
    setTitle("");
    setBody("");
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th><th>Title</th><th>Body</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <Button variant="warning" onClick={() => startEdit(post)}>Edit</Button>{" "}
              <Button variant="danger" onClick={() => deletePost(post.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>
            <input className="form-control" value={title}
              onChange={e => setTitle(e.target.value)} />
          </td>
          <td>
            <input className="form-control" value={body}
              onChange={e => setBody(e.target.value)} />
          </td>
          <td>
            {editId ? (
              <>
                <Button variant="success" onClick={updatePost}>Update</Button>{" "}
                <Button variant="secondary" onClick={cancelEdit}>Cancel</Button>
              </>
            ) : (
              <Button variant="primary" onClick={addPost}>Add</Button>
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Posts;