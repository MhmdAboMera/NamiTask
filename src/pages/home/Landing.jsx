import React from "react";
import CustomButton from "../../components/CustomButton";

const Landing = () => {
    // Fake data to replace API call
    const fakeData = {
        name_en: "we make it simple, but..  SIGNIFICANT",
        mission: "You bring the vision, we bring it to life with clarity, care, and creativity",
    };

    return (
        <div className="kfs-kafrElSheikh py-5 mt-5 mt-lg-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="heed fs-2 fw-bold mb-sm-2 mb-md-5">
                            {fakeData.name_en}
                        </div>
                        <p className="m-0 fs-5">
                            {fakeData.mission}
                        </p>
                        <div className="row mt-3">
                            <div className="col-4">
                                <CustomButton text={"For More"} color="#000" to={'/about'} routeTo={'/about'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;