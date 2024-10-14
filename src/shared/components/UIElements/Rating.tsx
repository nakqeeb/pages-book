import { FC } from "react";
import styles from "./rating.module.css";
const Rating: FC<{
  rate: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  className?: string;
  style?: React.CSSProperties | undefined;
}> = ({ rate, className, style }) => {
  return (
    <div className={`${className} ${styles.rating}`}>
      <div
        className={
          rate === 0.5 ? styles.half_dot : rate >= 1 ? styles.full_dot : ""
        }
        style={style}
      ></div>
      <div
        className={
          rate === 1.5 ? styles.half_dot : rate >= 2 ? styles.full_dot : ""
        }
        style={style}
      ></div>
      <div
        className={
          rate === 2.5 ? styles.half_dot : rate >= 3 ? styles.full_dot : ""
        }
        style={style}
      ></div>
      <div
        className={
          rate === 3.5 ? styles.half_dot : rate >= 4 ? styles.full_dot : ""
        }
        style={style}
      ></div>
      <div
        className={
          rate === 4.5 ? styles.half_dot : rate >= 5 ? styles.full_dot : ""
        }
        style={style}
      ></div>
    </div>
  );
};

export default Rating;
