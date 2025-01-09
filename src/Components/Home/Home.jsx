import Avatar from "../../assets/avataaars.svg";

const Home = () => {
  return (
    <>
      <head>
        <title>Home</title>
      </head>
      <section id="home" className=" py-5">
        <div className=" container py-5">
          <div className="inner d-flex flex-column justify-content-center align-items-center gap-3 py-5">
            <img src={Avatar} alt="Avatar" className="avatar" />
            <h1 className=" text-uppercase fw-bold text-white">
              start Framework
            </h1>
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <div className="line bg-white"></div>
              <i className="fa-solid fa-star text-white"></i>
              <div className="line bg-white"></div>
            </div>
            <p className="text-white fw-light">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
