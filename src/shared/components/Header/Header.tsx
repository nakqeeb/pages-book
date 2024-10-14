import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../assets/images/Logo.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../UIElements/CustomButton";
function Header() {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left_side}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <p>Pages</p>
          </div>
          <div className={styles.social_icons}>
            <div className={styles.icon_box}>
              <FontAwesomeIcon
                className={styles.social_icon}
                icon={faFacebookF}
              />
            </div>
            <div className={styles.icon_box}>
              <FontAwesomeIcon
                className={styles.social_icon}
                icon={faTwitter}
              />
            </div>
            <div className={styles.icon_box}>
              <FontAwesomeIcon
                className={styles.social_icon}
                icon={faLinkedinIn}
              />
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>
              <div className={styles.cart}>
                <FontAwesomeIcon className={styles.cart_icon} icon={faCartShopping} />
                <div className={styles.cart_badge}>01</div>
              </div>
            </li>
            <li>
                <CustomButton className={styles.order_btn} name="Order Today" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
