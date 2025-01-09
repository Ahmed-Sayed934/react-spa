import { useState } from "react";
import Port1 from "../../assets/port1.png";
import Port2 from "../../assets/port2.png";
import Port3 from "../../assets/port3.png";
import Port4 from "../../assets/port4.png";
import Port5 from "../../assets/port5.png";
import Port6 from "../../assets/port6.png";
import Card from "../Card/Card";
import FullScreen from "../FullScreen/FullScreen";

const Portfolio = () => {
  const [port] = useState([
    {
      id: 1,
      loc: Port1,
    },
    {
      id: 2,
      loc: Port2,
    },
    {
      id: 3,
      loc: Port3,
    },
    {
      id: 4,
      loc: Port4,
    },
    {
      id: 5,
      loc: Port5,
    },
    {
      id: 6,
      loc: Port6,
    },
  ]);
  const [selectedImg, setSelectedImg] = useState(null);

  const clickCard = (idx) => {
    const clickedImg = port[idx];
    if (clickedImg) {
      setSelectedImg(clickedImg.loc);
    }
  };

  function closeFullScreen() {
    setSelectedImg(null);
  }
  return (
    <>
      <head>
        <title>Portfolio</title>
      </head>
      <section
        id="portfolio"
        className="bg-white py-5 d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <h1 className=" text-uppercase fw-bold">portfolio component</h1>
        <div className="starRole d-flex gap-3 align-items-center justify-content-center">
          <div className="line "></div>
          <i className="fa-solid fa-star"></i>
          <div className="line "></div>
        </div>
        <div className="container py-1">
          <div className="row g-4">
            {port.map(function (element, idx) {
              return (
                <Card
                  portfolioImgs={element}
                  key={element.id}
                  clickCard={() => {
                    clickCard(idx);
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
      {selectedImg && (
        <FullScreen image={selectedImg} closeFull={closeFullScreen} />
      )}
    </>
  );
};

export default Portfolio;
