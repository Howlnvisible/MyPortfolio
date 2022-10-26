import styles from './InfoBar.module.scss';

type InfoBarProps = {
    infoBar: any
}
const InfoBar = ({
    infoBar
}:InfoBarProps) => {
    return (
        <div className={styles.header}>
            {infoBar}
        </div>
    )
}

export default InfoBar;