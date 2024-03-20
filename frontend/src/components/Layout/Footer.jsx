import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By SOnu SIngh.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=1000305351337"} target="_blank">
          <FaFacebookF />
        </Link>
        
        <Link to={"https://www.instagram.com/z_4_beingSonu/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
