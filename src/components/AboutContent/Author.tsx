import styles from "./author.module.css";
import author_img from "../../assets/images/author_img_1.jpg";
import HeadingTitleAlt from "../../shared/components/HeadingTitle/heading-title-alt";
import CustomButton from "../../shared/components/UIElements/CustomButton";

export default function Author() {
  return (
    <div className={styles.author}>
      <div className={`container ${styles.container}`}>
        <img src={author_img} alt="" />
        <div className={`${styles.content}`}>
          <div className={`${styles.details}`}>
            <div className={`${styles.info_1}`}>
              <p className="h-h5">Country :</p>
              <p className="h-h5">Language :</p>
              <p className="h-h5">Genre :</p>
              <p className="h-h5">Publication date :</p>
            </div>
            <div className={`${styles.info_2}`}>
              <p className="b-1">United Kingdom</p>
              <p className="b-1">English</p>
              <p className="b-1">Historiography</p>
              <p className="b-1">1991</p>
            </div>
          </div>

          <div className={`${styles.title}`}>
            <HeadingTitleAlt
              title="About Dr. John Abraham"
              className={`${styles.head_title}`}
            />
            <p className={`b-1 ${styles.meta_p}`}>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, that can combined with a handful of model sentence
              structures.
            </p>
            <CustomButton className={styles.contact_btn} name="Contact now" />
          </div>
        </div>
      </div>
    </div>
  );
}
