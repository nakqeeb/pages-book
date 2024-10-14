import HeadingTitle from '../../shared/components/HeadingTitle/heading-title';
import CustomButton from '../../shared/components/UIElements/CustomButton';
import styles from './subscribe.module.css';

function Subscribe() {
  return (
    <div className={styles.subscribe}>
        <div className={styles.container}>
            <HeadingTitle title='Read a free chapter' blue_underline />
            <p className={`b-1 ${styles.msg}`}>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
            <div className={styles.sub_form}>
                <input type="text" placeholder='Your Email id...' />
                <CustomButton className={`h-h7 ${styles.sub_btn}`} name="Subscribe" />
            </div>
        </div>
    </div>
  )
}

export default Subscribe