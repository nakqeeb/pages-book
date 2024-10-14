import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import styles from "./trusted-by.module.css";
import amazon_img from "../../assets/images/amazon.png";
import megan_img from "../../assets/images/megan.png";
import los_img from "../../assets/images/los.png";
import urban_img from "../../assets/images/urban.png";

function TrustedBy() {
  return (
    <div className={styles.trusted_by}>
      <div className={`container ${styles.container}`}>
        <HeadingTitle title="Trusted by the Best" />
        <div className={styles.content}>
          <div className={styles.box}>
            <img className={styles.amazon_img} src={amazon_img} alt="" />
            <p className="h-h5">Amazen Corp</p>
            <p className="b-2">
              A long established fact that a who looking at its layout.
            </p>
          </div>
          <div className={styles.box}>
            <img className={styles.megan_img} src={megan_img} alt="" />
            <p className="h-h5">Megan Books</p>
            <p className="b-2">
              A long established fact that a who looking at its layout.
            </p>
          </div>
          <div className={styles.box}>
            <img className={styles.los_img} src={los_img} alt="" />
            <p className="h-h5">Los Books</p>
            <p className="b-2">
              A long established fact that a who looking at its layout.
            </p>
          </div>
          <div className={styles.box}>
            <img className={styles.urban_img} src={urban_img} alt="" />
            <p className="h-h5">Urban Lib</p>
            <p className="b-2">
              A long established fact that a who looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
