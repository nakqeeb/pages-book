import CustomButton from "../../shared/components/UIElements/CustomButton";
import styles from "./author-book.module.css";

import { FC, MouseEventHandler } from "react";
const AuthorBook: FC<{
  bookImg: string;
  mockupImg?: string;
  title: string;
  price: string;
  description: string;
  bookType: string;
  onOrder?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onNavigate?: MouseEventHandler<HTMLDivElement> | undefined;
}> = ({ bookImg, mockupImg, title, price, description, bookType, onOrder, onNavigate }) => {
  return (
    <div className={styles.author_book}>
      <div className={`${styles.header}`} onClick={onNavigate}>
        <img className={`${styles.book_img}`} src={bookImg} alt="" />
        {mockupImg && (
          <img className={`${styles.mockup_img}`} src={mockupImg} alt="" />
        )}
      </div>
      <div className={`${styles.footer}`} onClick={onNavigate}>
        <div className={`${styles.content}`}>
          <div className={`${styles.title_price}`}>
            <div className={`${styles.title}`}>
              <p className="h-h4">{title}</p>
            </div>
            <div className={`${styles.price}`}>
              <p className="h-h6">{price}</p>
            </div>
          </div>
          <div className={`${styles.details}`}>
            <div className={`${styles.description}`}>
              <p className="b-1">
                {description}
              </p>
            </div>
            <div className={`${styles.book_type}`}>
              <p className="h-h5">{bookType}</p>
            </div>
          </div>
        </div>
      </div>
          <CustomButton className={`${styles.order_btn}`} name="Order Today" onClick={onOrder} />
    </div>
  );
};

export default AuthorBook;
