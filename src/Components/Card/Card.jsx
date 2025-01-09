/* eslint-disable react/prop-types */
const Card = ({ portfolioImgs ,clickCard}) => {
  return (
    <>
      {" "}
      <div className="col-md-4 ">
        <div className="inner rounded-4 overflow-hidden position-relative" onClick={clickCard}>
          <div className=" position-absolute top-0 bottom-0 start-0 end-0 overlay d-flex justify-content-center align-items-center" >
            <i className="fa fa-solid fa-plus text-white fa-7x"></i>
          </div>
          <img src={portfolioImgs.loc} alt="Portfolio img" className=" w-100" />
        </div>
      </div>
    </>
  );
};

export default Card;
