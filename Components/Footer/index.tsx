import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.firstRow}>
                2022 Aleksei Bychkov. 
            </div>
            <div className={styles.secondRow}>
                All 3D models made by myself. Free Icons from icons8.com.
            </div>
        </div>
    )
}

export default Footer;