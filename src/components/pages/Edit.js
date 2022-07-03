import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();

  const back_button = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    roll: "",
  });
  useEffect(() => {
    const UserDetails = async () => {
      const get_user = await axios.get(`http://localhost:2000/student/${id}`);

      setStudent(get_user.data);
    };
    UserDetails();
  }, [id]);
  function onFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:2000/student/${id}`, student);
      back_button("/");
    } catch (error) {
      console.log("something went wrong");
    }
  }

  function backButtonHandle() {
    back_button("/");
  }
  return (
    <>
      <div className="container">
        <h2 className="text-center text-primary mt-4 bg-info text-white p-3">
          Update Student Details
        </h2>
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <form className="mt-5 shadow p-4">
              <div className="mb-3 row">
                <label htmlFor="id" className="col-sm-2 col-form-label">
                  Id
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    value={student.id}
                    disabled
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={student.name}
                    name="name"
                    onChange={(e) => onFieldChange(e)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={student.email}
                    name="email"
                    onChange={(e) => onFieldChange(e)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="roll" className="col-sm-2 col-form-label">
                  Roll
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="roll"
                    value={student.roll}
                    name="roll"
                    onChange={(e) => onFieldChange(e)}
                  />
                </div>
              </div>
              <div className="text-center m-3">
                <button
                  onClick={(e) => onFormSubmit(e)}
                  type="submit"
                  className="btn btn-info"
                >
                  Update
                </button>
                <button
                  className="btn btn-primary ms-2"
                  onClick={backButtonHandle}
                >
                  Back to Home
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
