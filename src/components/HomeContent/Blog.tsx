import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import styles from "./blog.module.css";
import blog_img from "../../assets/images/blog_img.png";
function Blog() {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <HeadingTitle title="Articles & Resources" />
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.card_img}>
              <img src={blog_img} alt="" />
            </div>
            <div className={styles.card_info}>
              <div className={styles.title_desc}>
                <p className="h-h5">
                  The energy efficiency offers hydrotherapy or swim
                </p>
                <p className="b-1">
                  The point of using Lorem Ipsum hiter of that using making it
                  look like others readable will get end.
                </p>
              </div>
              <div className={styles.bottom}>
                <a href="#">Read more</a>
                <p>Author - 23.05.2022</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_img}>
              <img src={blog_img} alt="" />
            </div>
            <div className={styles.card_info}>
              <div className={styles.title_desc}>
                <p className="h-h5">
                  Release of Letraset sheets tools containing passages
                </p>
                <p className="b-1">
                  The point of using Lorem Ipsum hiter of that using making it
                  look like others readable will get end.
                </p>
              </div>
              <div className={styles.bottom}>
                <a href="#">Read more</a>
                <p>Author - 23.05.2022</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_img}>
              <img src={blog_img} alt="" />
            </div>
            <div className={styles.card_info}>
              <div className={styles.title_desc}>
                <p className="h-h5">
                  The energy efficiency offers hydrotherapy or swim
                </p>
                <p className="b-1">
                  The point of using Lorem Ipsum hiter of that using making it
                  look like others readable will get end.
                </p>
              </div>
              <div className={styles.bottom}>
                <a href="#">Read more</a>
                <p>Author - 23.05.2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
