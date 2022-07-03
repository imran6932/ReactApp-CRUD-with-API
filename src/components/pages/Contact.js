const Contact = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center my-3">Contact us</h1>
        <div className="row">
          <div className="col-md-8 offset-sm-2">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  type="textarea"
                  className="form-control"
                  id="message"
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
