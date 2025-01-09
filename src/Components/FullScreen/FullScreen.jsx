/* eslint-disable react/prop-types */

const FullScreen = ({ image, closeFull }) => {
  return (
    <>
      <div
        className="w-100  min-vh-100  bg-primary bg-opacity-25 position-absolute top-0 d-flex justify-content-center align-items-center"
        onClick={closeFull}
      >
        <img src={image} alt="img" />
      </div>
    </>
  );
};

export default FullScreen;
