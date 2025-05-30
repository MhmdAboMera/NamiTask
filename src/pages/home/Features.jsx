import React from 'react';
import Features1 from "../../assets/images/Features-1.jfif"
import Features2 from "../../assets/images/Features-2.jfif"
import Features3 from "../../assets/images/Features-3.jfif"
const Features = () => {
  return (
    <>
      <h2 className="special-heading text-center mb-3 mt-5">features</h2>
      <div className="features pb-5 bg-white position-relative" id="Features">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="box quality text-center border">
                <div className="image position-relative overflow-hidden" data-aos="fade-up">
                  <img src={Features1} alt="" className="img-fluid" />
                </div>
                <h2 className="position-relative mx-auto mt-3" data-aos="fade-up">Quality</h2>
                <p className="text-muted lh-base mx-4 my-4 fs-5" data-aos="fade-up">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                </p>
                <a href="#" className="btn-custom d-block mx-auto mb-4 text-decoration-none fw-bold fs-5 rounded" data-aos="fade-up">
                  More
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="box time text-center border">
                <div className="image position-relative overflow-hidden" data-aos="fade-up">
                  <img src={Features2} alt="" className="img-fluid" />
                </div>
                <h2 className="position-relative mx-auto mt-3" data-aos="fade-up">Time</h2>
                <p className="text-muted lh-base mx-4 my-4 fs-5" data-aos="fade-up">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                </p>
                <a href="#" className="btn-custom d-block mx-auto mb-4 text-decoration-none fw-bold fs-5 rounded" data-aos="fade-up">
                  More
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="box passion text-center border">
                <div className="image position-relative overflow-hidden" data-aos="fade-up">
                  <img src={Features3} alt="" className="img-fluid" />
                </div>
                <h2 className="position-relative mx-auto mt-3" data-aos="fade-up">Passion</h2>
                <p className="text-muted lh-base mx-4 my-4 fs-5" data-aos="fade-up">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                </p>
                <a href="#" className="btn-custom d-block mx-auto mb-4 text-decoration-none fw-bold fs-5 rounded" data-aos="fade-up">
                  More
                </a>
              </div>
            </div>

             <div className="col-lg-3 col-md-6">
              <div className="box quality text-center border">
                <div className="image position-relative overflow-hidden" data-aos="fade-up">
                  <img src={Features1} alt="" className="img-fluid" />
                </div>
                <h2 className="position-relative mx-auto mt-3" data-aos="fade-up">Quality</h2>
                <p className="text-muted lh-base mx-4 my-4 fs-5" data-aos="fade-up">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                </p>
                <a href="#" className="btn-custom d-block mx-auto mb-4 text-decoration-none fw-bold fs-5 rounded" data-aos="fade-up">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;