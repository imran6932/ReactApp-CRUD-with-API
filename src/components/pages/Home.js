import axios from "axios";
import { useState } from "react";

import List from "./List";

const Home = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    roll: "",
  });

  const [status, setStatus] = useState();

  function onFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:2000/student`, student);
      setStatus(true);
    } catch (error) {}
  }
  if (status) {
    return <Home />;
  }
  return (
    <>
      <div className="container-fluid  ">
        <h1 className="text-center  bg-primary text-white p-3 my-2">
          React CRUD with API
        </h1>
        <div className="row">
          <div className="col-md-5">
            <h4 className="text-center bg-info text white p-3 ">Add Student</h4>
            <form>
              <div className="mb-1">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={(e) => onFieldChange(e)}
                  name="name"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(e) => onFieldChange(e)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="roll" className="form-label">
                  Roll
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="roll"
                  onChange={(e) => onFieldChange(e)}
                  name="roll"
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary btn-sm my-2"
                  type="submit"
                  onClick={(e) => onFormSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-7">
            <h4 className="text-center bg-info text white p-3">Student List</h4>
            <List />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
