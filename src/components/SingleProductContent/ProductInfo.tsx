import styles from "./product-info.module.css";
import book_2 from "../../assets/images/Book_2.svg";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function ProductInfo() {
  return (
    <div className={`${styles.product_info}`}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.image}`}>
            <img className={`${styles.book_img}`} src={book_2} alt="" />
          </div>
          <div className={`${styles.info}`}>
            <div className={`${styles.title_price}`}>
              <p className={`h-h4 ${styles.title}`}>The Atomic One’s</p>
              <p className={`${styles.price}`}>
                $30.<span>00 USD</span>
              </p>
            </div>
            <div className={`${styles.details}`}>
                <p className={`b-1 ${styles.description}`}>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.</p>
                <div className={`b-1 ${styles.sub_description}`}>
                    <p>Publisher    :   Learning Private Limited (1 January 2021)</p>
                    <p>Language     :    English</p>
                    <p>Paperback    :   212 pages</p>
                    <p>ISBN-10  :   9788120345799</p>
                    <p>Dimensions   :   20 x 14 x 4 cm</p>
                </div>
            </div>
            <div className={`${styles.input_btn}`}>
                <input className={styles.input_field} type="text" placeholder="Ex. 1"/>
                <CustomButton className={`h-h7 ${styles.cart_btn}`} name="Add to Cart" ischildrenLeft={true} children={<FontAwesomeIcon
                    className={styles.cart_icon}
                    icon={faCartShopping}
                  />}/>
            </div>
          </div>
        </div>
        <div className={`${styles.sub_content}`}>
            <div className={styles.tabs}>
            <CustomButton className={`h-h7 ${styles.desc_tab}`} name="Product Description" />
            <CustomButton className={`h-h7 ${styles.info_tab}`} name="Additional Info" />
            </div>
            <div className={styles.desc_info}>
                <div>
                    <p className={`h-h4 ${styles.question}`}>Do you offer discounts for education?</p>
                    <p className={`b-1 ${styles.answer}`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div>
                    <p className={`h-h4 ${styles.question}`}>Is this book for me?</p>
                    <p className={`b-1 ${styles.answer}`}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
