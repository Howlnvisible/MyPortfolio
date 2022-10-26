import type { NextPage } from 'next';
import Border from '../../Components/Border';
import DarkTextGlowBehind from '../../Components/DarkTextGlowBehind';
import CardCarousel from '../../Containers/Gallery/CardCarousel';
import CommonCardContainer from '../../Containers/Gallery/CommonCardContainer';
import LatestNews from '../../Containers/Gallery/LatestNews';
import WorksInProgress from '../../Containers/Gallery/WorksInProgress';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import styles from './Gallery.module.scss';
import { galleryData } from '../../utils/galleryData';
import Header from '../../Components/Header';
import { useState } from 'react';
import FooterGallery from '../../Containers/Gallery/FooterGallery';

const Gallery: NextPage = () => {
    const windowDimension = useWindowDimensions();
    const [selected, setSelected] = useState<any>(galleryData.cardCarouselItems[0]);
    return (
        <>
            <Header
                 />
                <div className={styles.overflowContainer}>
                    <div
                        className={styles.image}
                        style={{
                            backgroundImage: selected.url
                        }}></div>
                        <div className={styles.absoluteDiv}>
                    <CardCarousel
                        cardCarouselItems={galleryData.cardCarouselItems}
                        selected={selected}
                        setSelected={setSelected}
                        windowDimension={windowDimension}
                    />
                </div>
                </div>
            <div className={styles.glowContainer}>
                <DarkTextGlowBehind
                    color={galleryData.darkTextGlowBehind.color}>
                    {galleryData.darkTextGlowBehind.children}
                </DarkTextGlowBehind>
            </div>
            <Border
                top
                left
                bottom
                right
            >
                <div className={styles.mainSection}>
                    <WorksInProgress
                        worksInProgress={galleryData.worksInProgress}
                        windowDimension={windowDimension}
                    />
                    <LatestNews
                        latestNews={galleryData.latestNews}
                        windowDimension={windowDimension}
                    />
                    <CommonCardContainer
                        commonCard={galleryData.commonCard}
                        windowDimension={windowDimension}
                    />
                </div>
            </Border>
            <div className={styles.glowContainer}>
                <DarkTextGlowBehind
                    color={galleryData.darkTextGlowBehindCopy.color}
                    title={galleryData.darkTextGlowBehindCopy.title}
                >
                    {galleryData.darkTextGlowBehindCopy.children}
                </DarkTextGlowBehind>
            </div>
            <FooterGallery
                footerItems={galleryData.footer}
            />
        </>
    )
}

export default Gallery;