import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const UserDetails = async () => {
      const get_user = await axios.get("http://localhost:2000/student");

      setUser(get_user.data);
    };
    UserDetails();
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`http://localhost:2000/student/${id}`);
    let newList = users.filter((item) => {
      return item.id !== id;
    });
    setUser(newList);
  };

  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Roll</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.roll}</td>
              <td>
                <Link
                  className="btn btn-primary btn-sm mx-2"
                  to={`/view/${user.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-info btn-sm mx-2"
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                  to="/"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
