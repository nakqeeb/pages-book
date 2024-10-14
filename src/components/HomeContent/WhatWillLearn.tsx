import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import styles from "./what-will-learn.module.css";
import author_img from "../../assets/images/author_img.png";
function WhatWillLearn() {
  return (
    <div className={styles.learn}>
      <div className={`container ${styles.container}`}>
        <HeadingTitle title="What will you learn?" />
        <div className={styles.content}>
          <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.number}>
                    <p className="h-h5">01</p>
                </div>
                <p className="h-h5">Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
            </div>
            <div className={styles.card}>
                <div className={styles.number}>
                    <p className="h-h5">02</p>
                </div>
                <p className="h-h5">Consume streaming data using Spark Streaming, Flink, and Storm.</p>
            </div>
            <div className={styles.card}>
                <div className={styles.number}>
                    <p className="h-h5">03</p>
                </div>
                <p className="h-h5">Choose an appropriate data storage technology for your application</p>
            </div>
            <div className={styles.card}>
                <div className={styles.number}>
                    <p className="h-h5">04</p>
                </div>
                <p className="h-h5">Analyze non-relational data using HBase, Cassandra, and MongoDB.</p>
            </div>
          </div>
          <div className={styles.image}>
            <img src={author_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWillLearn;
