const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-4">
              <div className="inner text-center text-white d-flex flex-column justify-content-center align-items-center gap-2">
                <h5 className="fs-3">LOCATION</h5>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner text-center text-white d-flex flex-column justify-content-center align-items-center gap-2">
                <h5 className=" fs-3 pb-2">AROUND THE WEB</h5>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <i className="fa fa-brands fa-facebook fa-2x"></i>
                  <i className="fa fa-brands fa-twitter fa-2x"></i>
                  <i className="fa fa-brands fa-linkedin fa-2x"></i>
                  <i className="fa fa-solid fa-globe fa-2x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner text-center text-white d-flex flex-column justify-content-center align-items-center gap-2">
                <h5 className="fs-3">ABOUT FREELANCER</h5>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
      <div className="copyRights text-center py-4 text-white">
        <p>Copyright © Ahmed Sayed 2025</p>
      </div>
    </>
  );
};

export default Footer;
