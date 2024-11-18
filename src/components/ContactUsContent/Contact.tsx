import HeadingTitleAlt from "../../shared/components/HeadingTitle/heading-title-alt";
import styles from "./contact.module.css";
import home_icon from "../../assets/images/home_icon.svg";
import envelop_icon from "../../assets/images/envelop_icon.svg";
import phone_call_icon from "../../assets/images/phone-call_icon.svg";
import user_icon from "../../assets/images/user.svg";
import email_icon from "../../assets/images/mail.svg";
import phone_icon from "../../assets/images/phone.svg";
import edit_icon from "../../assets/images/edit.svg";
import Tile from "./Tile";
import CustomButton from "../../shared/components/UIElements/CustomButton";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.title_desc}>
            <HeadingTitleAlt className={styles.title} title="Keep in Touch" />
            <p className={`${styles.desc}`}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className={styles.info}>
            <Tile
              image={home_icon}
              title="Visit Us :"
              description="No: 09a, Downtown, San Dieago, USA."
            />
            <Tile
              image={envelop_icon}
              title="Drop Us :"
              description="support@pages.com"
            />
            <Tile
              image={phone_call_icon}
              title="Call Us :"
              description="Call: 1-800-123-9999"
            />
          </div>
        </div>
        <div className={styles.fields}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.name_email_row}>
              <div className={styles.row_icon}>
                <img src={user_icon} className={styles.icon} alt="" />
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles.row_icon}>
                <img src={email_icon} className={styles.icon} alt="" />
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className={styles.phone_row}>
              <img src={phone_icon} className={styles.icon} alt="" />
              <input type="tel" placeholder="phone" />
            </div>
            <div className={styles.message_row}>
              <img src={edit_icon} className={styles.edit_icon} alt="" />
              <textarea placeholder="Message" />
            </div>
            <div className={styles.check_row}>
                <input type="checkbox" name="" id="" />
                <p className="b-2">Keep me up to date with news and offers from time to time by email</p>
            </div>
            <CustomButton type="submit" className={`h-h7 ${styles.btn}`} name="Send Message"/>
          </form>
        </div>
      </div>
    </div>
  );
}
