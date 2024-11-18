import { FC } from 'react';
import styles from './tile.module.css';

const Tile: FC<{image: string, title: string, description: string}> = ({image, title, description}) => {
  return (
    <div className={styles.tile}>
              <div className={styles.image}>
                <img src={image} alt="" />
              </div>
              <div className={styles.meta}>
                <p className={`h-h5 ${styles.meta_title}`}>{title}</p>
                <p className={`b-1 ${styles.meta_desc}`}>{description}</p>
              </div>
            </div>
  )
}

export default Tile;