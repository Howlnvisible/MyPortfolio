import styles from './Profile.module.scss';
import Image from 'next/image';

type ProfileProps = {
    profileItems: any;
}
const Profile = ({
    profileItems
}:ProfileProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.title}>
                    {profileItems.title}
                </div>
                <div className={styles.info}>
                    {profileItems.tag}
                </div>
            </div>
            <div className={styles.image}>
                <Image 
                    src={profileItems.src}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
        </div>
    )
}

export default Profile;