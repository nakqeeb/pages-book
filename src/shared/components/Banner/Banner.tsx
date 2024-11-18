import { FC } from "react";
import HeadingTitle from "../HeadingTitle/heading-title";
import styles from "./banner.module.css";
const Banner: FC<{
  title: string, description?: string, hasDescription?: boolean
}> = ({title, description, hasDescription = true}) => {
  return (
    <div className={styles.banner}>
    <div className={`container ${styles.container}`}>
      <HeadingTitle className={`${styles.about}`} title={title} />
      {hasDescription && <p className={`b-1 ${styles.meta_info}`}>{description}</p>}
    </div>
    </div>
  )
}

export default Banner