import styles from './SocialIcon.module.scss';
import Image from 'next/image';

type SocialIconProps = {
    src: string;
    href?: string;
    min?: boolean;
}
const SocialIcon = ({
    src,
    href,
    min = false
}: SocialIconProps) => {
    return (
        <>
            {href ? (
                <a href={href} target='_blank'>
                    <div className={styles.iconContainer}>
                        <Image 
                            src={src} 
                            width={min 
                                ? 32 
                                : 48
                            } 
                            height={min 
                                ? 32 
                                : 48
                            } 
                        />
                    </div>
                </a>
            ) : (
                <div className={`${styles.iconContainer} ${min ? styles.min : ``}`}>
                    <Image src={src} layout='fill' />
                </div>
            )}
        </>
    )
}

export default SocialIcon;