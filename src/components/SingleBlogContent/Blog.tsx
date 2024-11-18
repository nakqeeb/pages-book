import styles from "./blog.module.css";
import blog_img from "../../assets/images/man_reading.webp";

export default function Blog() {
  return (
    <div className={`${styles.blog}`}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.image_content}`}>
            <img src={blog_img} alt="" />
            <p className={`h-h5 ${styles.head_title}`}>October 6, 2021 / Classics</p>
            <p className={`b-1 ${styles.body}`}>There are many variations of passages of Lorem Ipsum available, but the majorithave suffered alteration in some form, by injected humour, or randomised words whicdon't look even slightly believable. If you are going to use a passage of Lorem Ipsum, need to be sure there isn't anything embarrassing hidden in the middle of text. All thLorem Ipsum generators on the Internet tend.</p>
        </div>
        <div className={`${styles.content}`}>
            <p className={`h-h4 ${styles.head_title}`}>The perfect book for all</p>
            <p className={`b-1 ${styles.body}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.</p>
            <ul>
                <li className={`b-1 ${styles.body}`}>It has roots in a piece of classical Latin literature from 45 BC,</li>
                <li className={`b-1 ${styles.body}`}>To generate Lorem Ipsum which looks reasonable</li>
                <li className={`b-1 ${styles.body}`}>The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</li>
            </ul>
        </div>
        <div className={`${styles.quotes}`}>
            <p className="b-2">“Crowdsource term sheet freemium beta stealth responsive web design niche market rock star channels.”</p>
        </div>
        <div className={`${styles.sub_content}`}>
            <p className={`h-h4 ${styles.head_title}`}>The perfect book for all</p>
            <p className={`b-1 ${styles.body}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.</p>
            <ol>
                <li className={`b-1 ${styles.body}`}>It has roots in a piece of classical Latin literature from 45 BC,</li>
                <li className={`b-1 ${styles.body}`}>To generate Lorem Ipsum which looks reasonable</li>
                <li className={`b-1 ${styles.body}`}>The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</li>
                <li className={`b-1 ${styles.body}`}>Be standard chunk of Lorem used since the 1500s</li>
            </ol>
        </div>
      </div>
    </div>
  );
}
