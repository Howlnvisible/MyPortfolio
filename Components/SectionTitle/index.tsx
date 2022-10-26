import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
    title?: string;
    subTitle?: string;
    align?: any;
    small?: boolean;
    min?: boolean;
    noBorder?: boolean;
    color?: string;
    className?: string;
    style?: any;
}
const SectionTitle = ({
    title,
    subTitle,
    align = `center`,
    small = false,
    min = false,
    noBorder = false,
    color,
    className,
    style
}: SectionTitleProps) => {
    return (
        <div
            className={`${styles.container} ${className}`}
            style={
                noBorder ? {
                    padding: `0px`,
                    ...style
                } : {
                    border: `1px solid rgba(251, 251, 251, 1)`,
                    background: `rgb(204, 183, 151, 1)`,
                    backdropFilter: `blur(10px)`,
                    borderRadius: `8px`,
                    padding: `.5rem 1rem`,
                    ...style
                }
            }>
            <span
                className={styles.title}
                style={{
                    textAlign: align,
                    fontSize: small ? `2.5rem` : min ? '1rem' : `4rem`,
                    color: color,
                    ...style
                }}
            >
                {title}
            </span>
            {subTitle ? (
                <span
                    className={styles.subTitle}
                    style={{
                        textAlign: align,
                        alignSelf: align === `left` 
                            ? `baseline`
                            : align === `right` 
                            ? `end` 
                            : `center`,
                        color: color
                    }}
                >
                    {subTitle}
                </span>
                ) : (
                    ``
                )}
        </div>
    )
}

export default SectionTitle;