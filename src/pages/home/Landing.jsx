import React from "react";
import CustomButton from "../../components/CustomButton";
import girl from '../../assets/images/girl.png'
const Landing = () => {
    // Fake data to replace API call
    const fakeData = {
        name_en: "we make it simple, but..  SIGNIFICANT",
        mission: "You bring the vision, we bring it to life with clarity, care, and creativity",
    };

    return (
        <div className="landing py-5 mt-5 mt-lg-2">
            <div className="container">
                <div className="row  align-items-center">
                    <div className="col-md-6 box-text">
                        <div className="heed fs-2 fw-bold mb-sm-2 mb-md-5" data-aos="fade-up">
                            {fakeData.name_en}
                        </div>
                        <p className="m-0 fs-5" data-aos="fade-up">
                            {fakeData.mission}
                        </p>
                        <div className="row mt-3" data-aos="fade-up">
                            <div className="col-sm-12 col-md-4">
                                <CustomButton text={"For More"} color="#000" to={'/about'} routeTo={'/about'} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up">
                        <div className="imge-box mt-3">
                            <img src={girl} width={"500px"}
                                alt="task"
                                title="logo"
                                loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;