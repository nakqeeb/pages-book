import { FC } from "react";
import styles from "./heading-title-alt.module.css";

const HeadingTitleAlt: FC<{
  title: string;
  className?: string;
}> = ({ title, className }) => {
  return (
    <div className={`${className} ${styles['heading-title-alt']}`}>
      <p className="h-h3">
        {title}
      </p>
    </div>
  );
};

export default HeadingTitleAlt;
