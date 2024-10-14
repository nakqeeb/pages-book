import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import styles from "./author.module.css";
import book from "../../assets/images/Book.svg";
import book_2 from "../../assets/images/Book_2.svg";
import CustomButton from "../../shared/components/UIElements/CustomButton";
function Author() {
  return (
    <div className={styles.author}>
      <div className={`container ${styles.container}`}>
        <HeadingTitle title="Author’s Book Includes" />
        <div className={styles.content}>
          <div className={styles.card}>
            <img src={book_2} alt="" />
            <div className={styles.info}>
              <div className={styles.title_desc}>
                <p className="h-h4">Atomic One’s</p>
                <p className="b-1">
                  Many variations of passages of Lorem Ipsum willing araise
                  alteration in some form.
                </p>
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
              </div>

              <CustomButton className={styles.order_btn} name="Order Today" />
            </div>
          </div>
          <div className={styles.card}>
            <img src={book} alt="" />
            <div className={styles.info}>
              <div className={styles.title_desc}>
                <p className="h-h4">The Dark Light</p>
                <p className="b-1">
                  Many variations of passages of Lorem Ipsum willing araise
                  alteration in some form.
                </p>
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
              </div>

              <CustomButton className={styles.order_btn} name="Order Today" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
