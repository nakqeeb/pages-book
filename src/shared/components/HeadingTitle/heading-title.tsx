import { FC } from "react";
import styles from "./heading-title.module.css";

const HeadingTitle: FC<{
  title: string;
  className?: string;
  blue_underline?: boolean;
}> = ({ title, className,  blue_underline=false }) => {
  return (
    <div className={`${className} ${blue_underline ? styles['heading-title-b'] : styles['heading-title']}`}>
      <p className="h-h3">
        {title}
      </p>
    </div>
  );
};

export default HeadingTitle;
