import type { NextPage } from 'next';
import Block from '../Components/About/Block';
import PortfolioButton from '../Components/About/PortfolioButton';
import Profile from '../Components/About/Profile';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import PostHolder from '../Components/PostHolder';
import { aboutMeItems } from '../utils/aboutMeItems';
import styles from '../styles/Main.module.scss';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoBar from '../Components/InfoBar';
import Meta from '../Components/Meta';

const AboutMe: NextPage = () => {
    const title = `Aleksei Bychkov`
    const description = `Welcome to my portfolio!`
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
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
                    <InfoBar
                        infoBar={aboutMeItems.infoBar} />
                    <Profile
                        profileItems={aboutMeItems.profileItems} />
                    <Block
                        title={`Work`}
                        blockItems={aboutMeItems.work}
                    />
                    <PortfolioButton
                        link={`/gallery`}
                        title={`My gallery`}
                    />
                    <Block
                        title={`Bio`}
                        blockItems={aboutMeItems.bio}
                    />
                    <Block
                        title={`Interests`}
                        blockItems={aboutMeItems.interests}
                    />
                    <Block
                        title={`Links`}
                        blockItems={aboutMeItems.links}
                        isLinks
                    />
                    <div className={styles.postHolderContainer}>
                        {aboutMeItems.posts.map((item: any, i: any) => {
                            if (i < 2) {
                                return (
                                    <PostHolder
                                        postItems={item}
                                        key={`aboutMeItems-${i}`}
                                    />
                                )
                            }
                        })}
                    </div>
                    <PortfolioButton
                        title={`latest posts`}
                        link={`/posts`}
                    />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AboutMe;