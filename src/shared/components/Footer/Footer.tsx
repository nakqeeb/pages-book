import styles from "./footer.module.css";
import book_icon from "../../../assets/images/book_icon.svg";
import three_dots from "../../../assets/images/three_dots.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.book}`}>
            <div className={`${styles.logo}`}>
              <img src={book_icon} alt="" />
              <p className={`${styles.title}`}>Pages</p>
            </div>
            <div className={`${styles.social_icons}`}>
              <div className={`${styles.icon_box}`}>
                <FontAwesomeIcon
                  className={styles.social_icon}
                  icon={faFacebookF}
                />
              </div>
              <div className={`${styles.icon_box}`}>
                <FontAwesomeIcon
                  className={styles.social_icon}
                  icon={faTwitter}
                />
              </div>
              <div className={`${styles.icon_box}`}>
                <FontAwesomeIcon
                  className={styles.social_icon}
                  icon={faLinkedinIn}
                />
              </div>
              <div className={`${styles.icon_box}`}>
                <FontAwesomeIcon
                  className={styles.social_icon}
                  icon={faInstagram}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.more}`}>
            <div className={`${styles.explore_utility}`}>
              <p className={`h-h5 ${styles.list_title}`}>Explore</p>
              <ul>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Home</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">About Us</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Services</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Appointments</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Blog</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Contact Us</p>
                </li>
              </ul>
            </div>
            <div className={`${styles.explore_utility}`}>
            <p className={`h-h5 ${styles.list_title}`}>Utility Pages</p>
            <ul>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Home</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">About Us</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Services</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Appointments</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Blog</p>
                </li>
                <li>
                  <img src={three_dots} alt="" />
                  <p className="b-2">Contact Us</p>
                </li>
              </ul>
            </div>
            <div className={`${styles.contact}`}>
            <p className={`h-h5 ${styles.list_title}`}>Keep in Touch</p>
            <ul>
              <li>
                <p className={`h-h7 ${styles.contact_title}`}>Address:</p>
                <p className={`b-2 ${styles.contact_info}`}>24A Kingston St, Los Vegas NC 28202, USA.</p>
              </li>
              <li>
                <p className={`h-h7 ${styles.contact_title}`}>Mail:</p>
                <p className={`b-2 ${styles.contact_info}`}>support@doctors.com</p>
              </li>
              <li>
                <p className={`h-h7 ${styles.contact_title}`}>Phone:</p>
                <p className={`b-2 ${styles.contact_info}`}>(+22) 123 - 4567 - 900</p>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.copyright}`}>
          <p>© Drafted by <span>Victorflow</span> - Powered by <span>Webflow</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
