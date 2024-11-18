import styles from "./articales.module.css";
import blog_img from "../../assets/images/blog_img.png";
import blog_img2 from "../../assets/images/blog_img2.png";
import blog_img3 from "../../assets/images/blog_img3.png";
import blog_img4 from "../../assets/images/blog_img4.png";
import ArticaleCard from "../../shared/components/ArticaleCard/ArticaleCard";
export default function Articales() {
  return (
    <div className={styles.articales}>
      <div className={`container ${styles.container}`}>
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
          image={blog_img2}
          title={"Release of Letraset sheets tools containing  passages"}
          description={
            "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
          }
          author={"Author"}
          date={"23.05.2022"}
        />
        <ArticaleCard
          id="3"
          image={blog_img3}
          title={"The energy efficiency offers hydrotherapy or swim"}
          description={
            "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
          }
          author={"Author"}
          date={"23.05.2022"}
        />
        <ArticaleCard
          id="4"
          image={blog_img4}
          title={"The energy efficiency offers hydrotherapy or swim"}
          description={
            "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
          }
          author={"Author"}
          date={"23.05.2022"}
        />
        <ArticaleCard
          id="5"
          image={blog_img}
          title={"Release of Letraset sheets tools containing  passages"}
          description={
            "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
          }
          author={"Author"}
          date={"23.05.2022"}
        />
        <ArticaleCard
          id="6"
          image={blog_img2}
          title={"The energy efficiency offers hydrotherapy or swim"}
          description={
            "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
          }
          author={"Author"}
          date={"23.05.2022"}
        />
        <ArticaleCard
          id="7"
          image={blog_img3}
          title={"The energy efficiency offers hydrotherapy or swim"}
          description={
            "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
          }
          author={"Author"}
          date={"23.05.2022"}
        />
        <ArticaleCard
          id="8"
          image={blog_img4}
          title={"Release of Letraset sheets tools containing  passages"}
          description={
            "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
          }
          author={"Author"}
          date={"23.05.2022"}
        />
        <ArticaleCard
          id="9"
          image={blog_img}
          title={"The energy efficiency offers hydrotherapy or swim"}
          description={
            "The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
          }
          author={"Author"}
          date={"23.05.2022"}
        />
      </div>
    </div>
  );
}
