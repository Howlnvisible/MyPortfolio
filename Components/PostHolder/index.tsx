import styles from './PostHolder.module.scss';
import Image from 'next/image';

type PostHolderProps = {
    postItems: any;
}
const PostHolder = ({
    postItems
}:PostHolderProps) => {
    return (
            <div 
                className={styles.container}
                onClick={() => window.open(postItems.navigate, '_blank')}
            >
                <div className={styles.innerContainer}>
                    <div className={styles.image}>
                        <Image 
                            src={postItems.src} 
                            width={500}
                            height={300}
                            objectFit='cover'
                        />
                    </div>
                    <div>
                        <div className={styles.title}>
                            {postItems.title}
                        </div>
                        <div className={styles.subTitle}>
                            {postItems.subTitle}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PostHolder;