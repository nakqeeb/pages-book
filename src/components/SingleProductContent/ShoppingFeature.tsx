import styles from "./shopping-feature.module.css";
import cube_img from '../../assets/images/cube.svg'
import thender_img from '../../assets/images/thender.svg'
import guard_img from '../../assets/images/guard.svg'

export default function ShoppingFeature() {
  return (
    <div className={`${styles.feature}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.box}>
            <div className={styles.image}>
                <img src={guard_img} alt="" />
            </div>
            <p className={`h-h5 ${styles.title}`}>Secure Payments</p>
            <p className={`b-1 ${styles.description}`}>There are many variations of passages of alteration in some form.</p>
        </div>
        <div className={styles.box}>
            <div className={styles.image}>
                <img src={cube_img} alt="" />
            </div>
            <p className={`h-h5 ${styles.title}`}>Free Shipping</p>
            <p className={`b-1 ${styles.description}`}>There are many variations of passages of alteration in some form.</p>
        </div>
        <div className={styles.box}>
            <div className={styles.image}>
                <img src={thender_img} alt="" />
            </div>
            <p className={`h-h5 ${styles.title}`}>100% Satisfactions</p>
            <p className={`b-1 ${styles.description}`}>There are many variations of passages of alteration in some form.</p>
        </div>
      </div>
    </div>
  );
}
