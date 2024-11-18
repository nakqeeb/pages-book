import styles from "./author-books.module.css";
import AuthorBook from "./AuthorBook";
import book from "../../assets/images/Book.svg";
import book_2 from "../../assets/images/Book_2.svg";
import audio from "../../assets/images/Audio.svg";
import cd from "../../assets/images/CD.svg";
import { NavLink, useNavigate } from "react-router-dom";

export default function AuthorBooks() {
    const navigate = useNavigate();
  return (
    <div className={styles.author_books}>
      <div className={`container ${styles.container}`}>
        <AuthorBook
          bookImg={book_2}
          title="Atomic One’s"
          price="$23.89"
          description="Many variations of passages of Lorem Ipsum willing araise
                alteration in some form."
          bookType="Printed Books"
          onOrder={() => console.log("order today")}
          onNavigate={() => navigate('1')}
        />
        <AuthorBook
          bookImg={book_2}
          mockupImg={audio}
          title="Atomic One’s"
          price="$23.89"
          description="Many variations of passages of Lorem Ipsum willing araise
                alteration in some form."
          bookType="Printed Books"
          onOrder={() => console.log("order today")}
          onNavigate={() => navigate('2')}
        />
        <AuthorBook
          bookImg={book_2}
          mockupImg={cd}
          title="Atomic One’s"
          price="$23.89"
          description="Many variations of passages of Lorem Ipsum willing araise
                alteration in some form."
          bookType="Printed Books"
          onOrder={() => console.log("order today")}
          onNavigate={() => navigate('3')}
        />
        <AuthorBook
          bookImg={book}
          title="The Dark Light"
          price="$23.89"
          description="Many variations of passages of Lorem Ipsum willing araise
                alteration in some form."
          bookType="Printed Books"
          onOrder={() => console.log("order today")}
          onNavigate={() => navigate('4')}
        />
        <AuthorBook
          bookImg={book}
          mockupImg={audio}
          title="The Dark Light"
          price="$23.89"
          description="Many variations of passages of Lorem Ipsum willing araise
                alteration in some form."
          bookType="Printed Books"
          onOrder={() => console.log("order today")}
          onNavigate={() => navigate('5')}
        />
        <AuthorBook
          bookImg={book}
          mockupImg={cd}
          title="The Dark Light"
          price="$23.89"
          description="Many variations of passages of Lorem Ipsum willing araise
                alteration in some form."
          bookType="Printed Books"
          onOrder={() => console.log("order today")}
          onNavigate={() => navigate('6')}
        />
      </div>
    </div>
  );
}
