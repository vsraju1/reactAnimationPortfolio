import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerText">
        <p>Get connected with me on Social Networks</p>
      </div>
      <div className="footerItems">
        <a href="https://github.com/vsraju1">
          <GitHubIcon className="nav__Icon" />
        </a>
        <a href="www.linkedin.com/in/vs-raju">
          <LinkedInIcon className="nav__Icon" />
        </a>
        <a href="https://www.instagram.com/vs_raju7">
          <InstagramIcon className="nav__Icon" />
        </a>
        <a href="#">
          <FacebookIcon className="nav__Icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
