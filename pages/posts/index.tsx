import { useEffect } from 'react';
import Block from '../../Components/About/Block';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import PostHolder from '../../Components/PostHolder';
import { aboutMeItems } from '../../utils/aboutMeItems';
import styles from './Posts.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Meta from '../../Components/Meta';

const Posts = () => {
    const title = `Posts ~ Aleksei Bychkov`
    const description = `Check out latest posts of Marco Bychkov`
    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])
    return (
        <>
            <Meta
                title={title}
                description={description}
            />
            <Header />
            <div
                className={styles.container}
                data-aos='fade-up'
            >
                <div className={styles.innerContainer}>
                    <Block title={`Popular Posts`} />
                    <div className={styles.gridContainer}>
                        {aboutMeItems.posts.map((item: any, i: any) => {
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