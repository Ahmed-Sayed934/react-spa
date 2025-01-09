const About = () => {
  return (
    <>
      <head>
        <title>About</title>
      </head>

      <section id="about" className="py-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center gap-3 py-5">
            <h1 className=" text-uppercase fw-bold text-white">
              about component
            </h1>
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <div className="line bg-white"></div>
              <i className="fa-solid fa-star text-white"></i>
              <div className="line bg-white"></div>
            </div>
            <div className="row py-3">
              <div className="col-md-6 text-white">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6 text-white">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
