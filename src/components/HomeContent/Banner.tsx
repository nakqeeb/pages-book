import CustomButton from "../../shared/components/UIElements/CustomButton";
import styles from "./banner.module.css";
import book from '../../assets/images/Book.svg'
function Banner() {
  return (
    <div className={styles.banner}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left_side}>
          <div className={styles.welcome}>
            <p>Welcome to Pages</p>
          </div>
          <p className={`h-h2 ${styles.title}`}>Books are uniquely portable magic </p>
          <p className={`b-1 ${styles.desc}`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          <div className={styles.btns}>
                <CustomButton className={styles.order_btn} name="Order Today" />
                <a href="#">Read Free Demo</a>
          </div>
          <div className={styles.meta}>
            <div className={styles.data}>
              <div className={styles.top}>
                <p className="h-h5">Pages:</p>
              </div>
              <p className="b-2">586pages</p>
            </div>
            <div className={styles.data}>
              <div className={styles.top}>
                <p className="h-h5">Length:</p>
              </div>
              <p className="b-2">10 Hours</p>
            </div>
            <div className={styles.data}>
              <div className={styles.top}>
                <p className="h-h5">Ratings:</p>
              </div>
              <p className="b-2">4.5/5 (305 ratings)</p>
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <img src={book} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
