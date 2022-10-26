import styles from './Block.module.scss';
import Image from 'next/image';

type BlockProps = {
    title: string;
    blockItems?: any;
    isLinks?: boolean;
}
const Block = ({
    title,
    blockItems,
    isLinks
}: BlockProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {title}
            </div>
            {blockItems?.map((item: any, i: any) => {
                return (
                    <div 
                        className={styles.bioContainer}
                        key={`blockItems-${i}`}
                    >
                        {item.subTitle ? (
                            <div className={styles.subTitle}>
                                {item.subTitle}
                            </div>
                        ) : (``)}
                        {isLinks ? (
                            <div   
                                className={styles.linksContainer}
                                onClick={() => window.open(item.navigate, '_blank')}
                            >
                                <div>
                                    <Image
                                        src={item.src}
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <div>
                                    {item.info}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.info}>
                                {item.info}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Block;