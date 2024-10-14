import styles from "./about.module.css";
import author_img from "../../assets/images/author_img.png";
import qr from "../../assets/images/qr.png";
import HeadingTitleAlt from "../../shared/components/HeadingTitle/heading-title-alt";
function About() {
  return (
    <div className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div className={styles.image}>
          <img src={author_img} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.author_info}>
            <HeadingTitleAlt title="About Author" />
            <p className="b-1">
              All the Lorem Ipsum generators on the Internet tend to repeated
              predefined chunks as necessary, making this the first true value
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful.
            </p>
          </div>
          <div className={styles.counter}>
            <div className={styles.number}>
              <p className="h-h2">02</p>
              <p className="b-2">Books Published</p>
            </div>
            <div className={styles.number}>
              <p className="h-h2">4.5</p>
              <p className="b-2">User Reviews</p>
            </div>
            <div className={styles.number}>
              <p className="h-h2">04</p>
              <p className="b-2">Best Seller Awards</p>
            </div>
          </div>
          <div className={styles.details}>
            <img src={qr} alt="" />
            <div className={styles.content}>
              <p className="h-h6">John Abraham , Ph.d</p>
              <p className="b-1">Mail : johnabraham@gmail.com</p>
              <p className="b-1">Phone : (+2) 123 545 9000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
