import Block from '../../Components/About/Block';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import PostHolder from '../../Components/PostHolder';
import { aboutMeItems } from '../../utils/aboutMeItems';
import styles from './Posts.module.scss';

const Posts = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <Block
                        title={`Popular Posts`}
                    />
                    <div className={styles.gridContainer}>
                        {aboutMeItems.posts.map((item: any, i:any) => {
                            return (
                                <PostHolder
                                    postItems={item}
                                    key={`aboutMeItems-${i}`}
                                />
                            )
                        })}
                    </div>
                </div>
                <Footer />  
            </div>
        </>
    )
}

export default Posts;