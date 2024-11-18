import styles from "./articale-card.module.css";
import blog_img from "../../../assets/images/blog_img.png";
import { FC, MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";

const ArticaleCard: FC<{
  id: string;
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
}> = ({ id, image, title, description, author, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={image} alt="" />
      </div>
      <div className={styles.card_info}>
        <div className={styles.title_desc}>
          <p className="h-h5">{title}</p>
          <p className="b-1">{description}</p>
        </div>
        <div className={styles.bottom}>
          <NavLink to={id}>Read more</NavLink>
          <p>
            {author} - {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticaleCard;
