import HeadingTitleAlt from "../../shared/components/HeadingTitle/heading-title-alt";
import Rating from "../../shared/components/UIElements/Rating";
import styles from "./testimonial.module.css";
import man1 from "../../assets/images/man1.webp";
import man2 from "../../assets/images/man2.webp";
import man3 from "../../assets/images/man3.jpg";
function Testimonial() {
  return (
    <div className={styles.testimonial}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <HeadingTitleAlt
            className={styles.heading_title}
            title="What Readers Say About the Book"
          />
          <div className={styles.bottom}>
            <p className="b-1">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators.
            </p>
            <div className={styles.overall}>
              <div className={styles.rate}>
                <Rating rate={4.5} />
                <p className="h-h6">(4.8/5)</p>
              </div>
              <p className="b-1">Overall Customer Ratings</p>
            </div>
          </div>
        </div>
        <div className={styles.reviews}>
          <div className={styles.card}>
            <div className={styles.top}>
              <img src={man1} alt="" />
              <div>
                <p className="h-h5">Martin Philips</p>
                <Rating style={{ width: 12.67, height: 12.67 }} rate={4.5} />
              </div>
            </div>
            <div className={styles.info}>
              <p className="h-h6">“ Awesome Impact ”</p>
              <p className="b-1">
                All the Lorem Ipsum generators on the Internet tend to repeat
                willings predefined chunks value.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <img src={man2} alt="" />
              <div>
                <p className="h-h5">Martin Philips</p>
                <Rating style={{ width: 12.67, height: 12.67 }} rate={4.5} />
              </div>
            </div>
            <div className={styles.info}>
              <p className="h-h6">“ Awesome Impact ”</p>
              <p className="b-1">
                All the Lorem Ipsum generators on the Internet tend to repeat
                willings predefined chunks value.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.top}>
              <img src={man3} alt="" />
              <div>
                <p className="h-h5">Martin Philips</p>
                <Rating style={{ width: 12.67, height: 12.67 }} rate={4.5} />
              </div>
            </div>
            <div className={styles.info}>
              <p className="h-h6">“ Awesome Impact ”</p>
              <p className="b-1">
                All the Lorem Ipsum generators on the Internet tend to repeat
                willings predefined chunks value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
