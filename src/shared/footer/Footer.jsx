import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <h1 className="text-4xl font-bold">DreamMotorz</h1>
                <p>Quality Toys, Limitless Fun<br /></p>
            </div>
            <div>
                <span className="footer-title">Category</span>
                <a className="link link-hover">Sports Cars</a>
                <a className="link link-hover">Monster Trucks</a>
                <a className="link link-hover">Emergency Vehicles</a>
                <a className="link link-hover">Constructor Vehicels</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/about' className="link link-hover">About us</Link>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Affiliate</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="text-xl space-y-2 ">
                    <FaFacebook className="hover:text-purple-700"/>
                    <FaInstagram className="hover:text-purple-700"/>
                    <FaTwitter className="hover:text-purple-700"/>
                    <FaLinkedin className="hover:text-purple-700"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;