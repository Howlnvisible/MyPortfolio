import SectionTitle from '../../../Components/SectionTitle';
import styles from './FooterGallery.module.scss';

type FooterGalleryProps = {
    transparent?: boolean;
    footerItems?: any
}
const FooterGallery = ({
    transparent = false,
    footerItems
}:FooterGalleryProps) => {
    return (
        <div
            className={styles.container}
            style={
                !transparent ?
                    {
                        background: `rgba(255, 255, 255, 0.1)`,
                        backdropFilter: `blur(50px)`
                    } : {}
            }
        >
            <nav className={styles.footer}>
                <div className={styles.author}>
                    {footerItems.author}
                </div>
                <div className={styles.middleSection}>
                    <SectionTitle
                        subTitle={footerItems.sectionTitle.subTitle}
                        min
                        noBorder
                        color={footerItems.sectionTitle.color}
                    />
                </div>
                <div className={styles.footerPolicy}>
                    {footerItems.policyItems.map((item:any, i:any) => {
                        return (
                            <div key={`footerItems-${i}`}>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            </nav>
        </div>
    )
}

export default FooterGallery;