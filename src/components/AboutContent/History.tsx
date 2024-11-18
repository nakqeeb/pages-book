import styles from "./history.module.css";
import history_img from "../../assets/images/history_img.jpg";
import HeadingTitleAlt from "../../shared/components/HeadingTitle/heading-title-alt";
export default function History() {
  return (
    <div className={`${styles.history}`}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.content}`}>
            <div className={`${styles.head}`}>
            <HeadingTitleAlt
            title="My Story"
            className={`${styles.head_title}`}
          />
          <p className={`b-1 ${styles.meta_p}`}>
            Making this the first true generator on the Internet. It uses a
            dictionary of over 200 Latin words, combined with a handful of model
            sentence structures.
          </p>
            </div>
          <div className={`${styles.points}`}>
            <div className={`${styles.point}`}>
              <div className={`${styles.point_num} ${styles.dotted_line}`}>
                <p className="h-h4">01</p>
              </div>
              <div className={`${styles.point_info}`}>
                <p className={`h-h5 ${styles.meta_title}`}>
                  Great Author Awards - 1996 & 2000
                </p>
                <p className={`b-1 ${styles.meta_desc}`}>
                  How to navigate around the interface and toggle on/off the
                  panels you wish to use.
                </p>
              </div>
            </div>

            <div className={`${styles.point}`}>
              <div className={`${styles.point_num} ${styles.dotted_line}`}>
                <p className="h-h4">02</p>
              </div>
              <div className={`${styles.point_info}`}>
                <p className={`h-h5 ${styles.meta_title}`}>
                  10 Times New York Times ® Best Seller
                </p>
                <p className={`b-1 ${styles.meta_desc}`}>
                  How to navigate around the interface and toggle on/off the
                  panels you wish to use.
                </p>
              </div>
            </div>

            <div className={`${styles.point}`}>
              <div className={`${styles.point_num}`}>
                <p className="h-h4">03</p>
              </div>
              <div className={`${styles.point_info}`}>
                <p className={`h-h5 ${styles.meta_title}`}>
                  Writer of Hack Productivity
                </p>
                <p className={`b-1 ${styles.meta_desc}`}>
                  How to navigate around the interface and toggle on/off the
                  panels you wish to use.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.image}`}>
          <img src={history_img} alt="" />
        </div>
      </div>
    </div>
  );
}
