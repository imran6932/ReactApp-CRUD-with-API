import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState([]);
  useEffect(() => {
    const UserDetails = async () => {
      const get_user = await axios.get(`http://localhost:2000/student/${id}`);

      setStudent(get_user.data);
    };
    UserDetails();
  }, [id]);

  function backclickHandle() {
    navigate("/");
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center bg-info text-white p-3 m-2">
            Student Details
          </h1>
          <div className="col-sm-8 offset-2 mt-5 shadow p-4">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Roll no.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.roll}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center ">
            <input
              className=" btn btn-primary mt-3"
              type="button"
              value="Back to Home"
              onClick={backclickHandle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
