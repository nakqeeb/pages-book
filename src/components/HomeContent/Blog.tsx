import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import styles from "./blog.module.css";
import blog_img from "../../assets/images/blog_img.png";
import ArticaleCard from "../../shared/components/ArticaleCard/ArticaleCard";
function Blog() {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <HeadingTitle title="Articles & Resources" />
        <div className={styles.content}>
          <ArticaleCard
            id="1"
            image={blog_img}
            title={"Significant reading has more info number"}
            description={
              "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
            }
            author={"Author"}
            date={"23.05.2022"}
          />
          <ArticaleCard
            id="2"
            image={blog_img}
            title={"Significant reading has more info number"}
            description={
              "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
            }
            author={"Author"}
            date={"23.05.2022"}
          />
          <ArticaleCard
            id="3"
            image={blog_img}
            title={"Significant reading has more info number"}
            description={
              "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
            }
            author={"Author"}
            date={"23.05.2022"}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
