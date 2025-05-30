import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { FaAngleRight, FaEnvelope, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { FaXTwitter } from "react-icons/fa6";
import footbg from "../assets/images/footer-bg-2.png"
const Footer = () => {
    const fakeSettings = {
        logo: "https://placehold.co/60x60",
        vision: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        tel1: "+20 115 8091 380",
        email: "mhmdkhaled130@gmail.com",
        address: "123 Main Street, Cairo, Egypt",
        twitter: "https://twitter.com/company",
        linkedin: "https://linkedin.com/company",
        youtube: "https://youtube.com/company",
        instagram: "https://instagram.com/company"
    };

    const fakeDepartments = [
        { id: 1, name_en: "Computer Science", name_ar: "علوم الحاسوب" },
        { id: 2, name_en: "Engineering", name_ar: "الهندسة" },
        { id: 3, name_en: "Business", name_ar: "الأعمال" },
        { id: 4, name_en: "Medicine", name_ar: "الطب" },
        { id: 5, name_en: "Arts", name_ar: "الفنون" }
    ];


    return (
        <footer>
            <div className="img-box-footer">
                <img
                    src={footbg}
                    alt="footer"
                    loading="lazy"
                    title='footer-image'
                    width={"100%"}
                    height={"100%"}
                    className='img-footer'
                />
            </div>
            <div className="container">
                <div className="row pb-2">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="p-3 d-flex justify-content-center">
                            <img
                                className="img_footer"
                                width={"140px"}
                                height={"140px"}
                                src={fakeSettings.logo}
                                title="company_logo"
                                alt="company_logo"
                                loading="lazy"
                            />
                        </div>
                        <div className="footer-text mb-2 pb-2">
                            {fakeSettings.vision}
                        </div>

                        {/* Social Icons */}
                        <div className="d-flex gap-2 my-md-0 my-3 social_icon">
                            <Link to={`https://wa.me/01158091380`} className="whats" target='_blank' aria-label="whatsapp"><FaWhatsapp /></Link>
                            <Link to={`https://www.facebook.com/mhmd`} className="facebook" target='_blank' aria-label="facebook"><FaFacebook /></Link>
                            <Link to={`https://www.instagram.com/instagram`} className="insta" target='_blank' aria-label="instagram"><FaInstagram /></Link>
                            <Link to={`youtube`} className="youtube" target='_blank' aria-label="youtube"><FaYoutube /></Link>
                            <Link to={`https://www.linkedin.com/in/linkedin`} className="linkedin" target='_blank' aria-label="linkedin"><FaLinkedin /></Link>
                            <Link to={`https://twitter.com/twitter`} className="twitter" target='_blank' aria-label="twitter"><FaXTwitter /></Link>
                        </div>
                    </div>

                    <div className="col-6 col-sm-12 col-md-6 col-lg-3">
                        <div className="bord_side">
                            <p className="text-dark fs-3">Departments</p>
                            <div className="d-flex mt-2 service flex-column gap-3 m-0 p-0">
                                {fakeDepartments.map((depart) => {
                                    return (
                                        <Link
                                            key={depart.id}
                                            to={`#`}
                                            className="d-flex gap-2 align-items-center text-decoration-none text-dark service-link"
                                        >
                                            <FaAngleRight />
                                            <span>{depart.name_en}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-12 col-md-6 col-lg-3">
                        <div className="bord_side">
                            <p className="text-dark fs-3">Quick Links</p>
                            <div className="d-flex mt-2 flex-column gap-2 p-0">
                                <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/">
                                    <FaAngleRight />
                                    <span>Home</span>
                                </NavLink>
                                <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/about">
                                    <FaAngleRight />
                                    <span>About Us</span>
                                </NavLink>
                                <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/">
                                    <FaAngleRight />
                                    <span>Units</span>
                                </NavLink>
                                <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/">
                                    <FaAngleRight />
                                    <span>News</span>
                                </NavLink>
                                <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/">
                                    <FaAngleRight />
                                    <span>Management</span>
                                </NavLink>
                                <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/contact">
                                    <FaAngleRight />
                                    <span>Contact Us</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="bord_side">
                            <p className="text-dark fs-3">Contact Us</p>
                            <div className="d-flex mt-2 flex-column gap-2 footer-text py-2 p-0">
                                <Link
                                    className="d-flex gap-2 align-items-center text-decoration-none text-dark"
                                    to={`tel:${fakeSettings.tel1}`}
                                    rel="nofollow"
                                >
                                    <div className="contact_icon px-2 py-1">
                                        <FaPhoneSquareAlt />
                                    </div>
                                    <span>{fakeSettings.tel1}</span>
                                </Link>

                                <Link
                                    className="d-flex gap-2 align-items-center text-decoration-none text-dark"
                                    to={`mailto:${fakeSettings.email}`}
                                    rel="nofollow"
                                >
                                    <div className="contact_icon px-2 py-1">
                                        <FaEnvelope />
                                    </div>
                                    <span>{fakeSettings.email}</span>
                                </Link>

                                <div className="d-flex gap-2 align-items-center text-decoration-none text-dark">
                                    <div className="contact_icon px-2 py-1">
                                        <ImLocation />
                                    </div>
                                    <span>{fakeSettings.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            {/* <button
                className="back-to-top btn btn-primary position-fixed"
                style={{ bottom: '20px', right: '20px', zIndex: 1000 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑
            </button> */}
            <button
                type="button"
                className="vp-back-to-top-button"
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <span
                    className="vp-scroll-progress"
                    role="progressbar"
                    aria-labelledby="loadinglabel"
                    aria-valuenow="0"
                >
                    <svg>
                        <circle
                            cx="26"
                            cy="26"
                            r="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="0 100"
                        ></circle>
                    </svg>
                </span>
                <div className="back-to-top-icon">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"></path>
                    </svg>
                </div>
            </button>


        </footer>
    );
};

export default Footer;