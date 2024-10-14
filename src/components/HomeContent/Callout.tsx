import HeadingTitleAlt from "../../shared/components/HeadingTitle/heading-title-alt";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import styles from "./callout.module.css";
import coffee_img from "../../assets/images/coffee.png";
function Callout() {
  return (
    <div className={styles.callout}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <HeadingTitleAlt title="Get Book Copy Today!" />
          <p className="b-1">
            This the first true value generator on the Internet. It uses alphas
            dictionary of over 200 Latin words.
          </p>
          <CustomButton className={styles.order_btn} name="Order Today" />
        </div>
        <img src={coffee_img} alt="coffee_img" />
      </div>
    </div>
  );
}

export default Callout;
