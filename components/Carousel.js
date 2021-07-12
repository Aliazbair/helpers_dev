import React from 'react'

function Carousel() {
    return (
      <>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/image/image.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-info">Images</h5>
                <p className="text-info lead">
                  Get an unlimited amount of high quality photos
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/image/icons.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-info">Icons</h5>
                <p className="text-info lead">
                  Get an unlimited amount of open source icons
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/image/colors.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-info">colors</h5>
                <p className="text-info lead">
                  Add a group of attractive colors to your site or design
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
}

export default Carousel
