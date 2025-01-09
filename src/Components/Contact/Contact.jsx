const Contact = () => {
  return (
    <>
      <head>
        <title>Contact</title>
      </head>
      <section id="contact">
        <div className="container py-5 text-center d-flex flex-column justify-content-center align-items-center gap-3">
          {" "}
          <h1 className=" text-uppercase fw-bold">contact component</h1>
          <div className="starRole d-flex gap-3 align-items-center justify-content-center">
            <div className="line "></div>
            <i className="fa-solid fa-star"></i>
            <div className="line "></div>
          </div>
          <div className="formHolder w-75">
            {" "}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control shadow-none border-0 border-bottom border-dark-subtle rounded-0"
                id="nameInput"
                placeholder="Your Name"
              />
              <label htmlFor="nameInput">Name:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control shadow-none border-0 border-bottom border-dark-subtle rounded-0"
                id="ageInput"
                placeholder="00-99"
              />
              <label htmlFor="ageInput">Age:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control shadow-none border-0 border-bottom border-dark-subtle rounded-0"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <textarea
                type="text"
                className="form-control shadow-none border-0 border-bottom border-dark-subtle rounded-0"
                id="messageInput"
                placeholder="Enter Your message"
              />
              <label htmlFor="messageInput">Message</label>
            </div>
            <button className="btn btn-success my-4">Send Message</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
