import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import styles from "./chapter.module.css";
function Chapter() {
  return (
    <div className={styles.chapter}>
      <div className={`container ${styles.container}`}>
        <HeadingTitle title="The Chapter Includes" />
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className="h-h5">Chapter- 01 Get Started Intro</p>
            <p className="b-1">
              Making this the first true value generator on the Internet. It of
              over 200 Latin words, combined with a handful.
            </p>
            <div className={styles.meta}>
              <div className={styles.data}>
                <div className={styles.top}>
                  <p className="h-h6">Pages:</p>
                </div>
                <p className="b-2">586pages</p>
              </div>
              <div className={styles.data}>
                <div className={styles.top}>
                  <p className="h-h5">Length:</p>
                </div>
                <p className="b-2">10 Hours</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p className="h-h5">Chapter- 02 Create a Massive Content</p>
            <p className="b-1">
              Making this the first true value generator on the Internet. It of
              over 200 Latin words, combined with a handful.
            </p>
            <div className={styles.meta}>
              <div className={styles.data}>
                <div className={styles.top}>
                  <p className="h-h6">Pages:</p>
                </div>
                <p className="b-2">586pages</p>
              </div>
              <div className={styles.data}>
                <div className={styles.top}>
                  <p className="h-h5">Length:</p>
                </div>
                <p className="b-2">10 Hours</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p className="h-h5">Chapter- 03 Maintaining the Creative Arcs</p>
            <p className="b-1">
              Making this the first true value generator on the Internet. It of
              over 200 Latin words, combined with a handful.
            </p>
            <div className={styles.meta}>
              <div className={styles.data}>
                <div className={styles.top}>
                  <p className="h-h6">Pages:</p>
                </div>
                <p className="b-2">586pages</p>
              </div>
              <div className={styles.data}>
                <div className={styles.top}>
                  <p className="h-h5">Length:</p>
                </div>
                <p className="b-2">10 Hours</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p className="h-h5">Chapter- 04 The Conclusion</p>
            <p className="b-1">
              Making this the first true value generator on the Internet. It of
              over 200 Latin words, combined with a handful.
            </p>
            <div className={styles.meta}>
              <div className={styles.data}>
                <div className={styles.top}>
                  <p className="h-h6">Pages:</p>
                </div>
                <p className="b-2">586pages</p>
              </div>
              <div className={styles.data}>
                <div className={styles.top}>
                  <p className="h-h5">Length:</p>
                </div>
                <p className="b-2">10 Hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
}

export default Chapter;
