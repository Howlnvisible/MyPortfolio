import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Carousel.module.scss';
import Image from 'next/image';

type CarouselProps = {
    cardCarouselItems: any;
    selected: any;
    setSelected: any;
    isShowcase?: boolean;
}

const Carousel = ({
    cardCarouselItems,
    selected,
    setSelected,
    isShowcase,
}: CarouselProps) => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [cardWidth, setCardWidth] = useState<number>(0);
    const [currentImage, setCurrentImage] = useState<number>(0);

    const length = cardCarouselItems.length;

    const nextSlide = () => {
        setCurrentImage((prev) => {
            let newIndex = prev === length - 1 ? 
               0 : currentImage + 1
            setSelected(cardCarouselItems[newIndex])
            return newIndex;
        });
    };

    const prevSlide = () => {
        setCurrentImage((prev) => {
            let newIndex = prev === 0 ?
                length - 1 : currentImage - 1
            setSelected(cardCarouselItems[newIndex])
            return newIndex;
        });
    }

    const containerRef = useRef<any>(null);
    const creepzCardRef = useRef<any>(null);

    useEffect(() => {
        if (!containerRef || !creepzCardRef) return;
        setContainerWidth(containerRef.current.offsetWidth);
        setCardWidth(creepzCardRef.current.offsetWidth);

        const handleResize = () => (
            setContainerWidth(containerRef.current.offsetWidth),
            setCardWidth(creepzCardRef.current.offsetWidth)
        )
        
        window.addEventListener(`resize`, handleResize);
        return () => window.removeEventListener(`resize`, handleResize)
    }, [containerWidth, cardWidth]);

    useEffect(() => {
        if (!containerRef) return;
        setContainerWidth(containerRef.current.offsetWidth)
    }, [containerRef?.current?.offsetWidth])

    const transform = useMemo(() => {
        const creepzCardCenter = (currentImage + 1) * cardWidth - cardWidth / 2
        const transformValue = creepzCardCenter - containerWidth / 2
        if (-1 * transformValue > 0) {
            return 0;
        }
        if (transformValue > cardWidth * cardCarouselItems.length - containerWidth) {
            return -1 * (cardWidth * cardCarouselItems.length - containerWidth)
        }
        return -1 * transformValue;
    }, [currentImage, containerWidth]);

    return (
        <>
            <div className={styles.container}>
                <div 
                    className={`${styles.button} ${isShowcase ? styles.showcase : ``}`}
                    onClick={prevSlide}
                >
                    <Image
                        src={'/Common/selectorLeft.svg'}
                        width={40}
                        height={20}
                    />
                </div>
                <div className={styles.itemContainer}>
                    <div 
                        className={styles.innerContainer}
                        style={{ 
                            transform: `translate(${transform}px)` 
                        }}
                        ref={containerRef}
                    >
                        {cardCarouselItems.map((item: any, index: any) => {
                            return (
                                <div 
                                    className={styles.creepzContainer}
                                    key={`creepzCarousel-${index}`}
                                    ref={creepzCardRef}
                                >
                                    <div
                                        className={`${styles.imageContainer} 
                                            ${currentImage === item.id 
                                                ? styles.selected 
                                                : ``
                                        }`}
                                        onClick={() => { 
                                            setCurrentImage(item.id); 
                                            setSelected(item);
                                        }}>
                                        <Image
                                            src={item.src}
                                            width={`100%`}
                                            height={`100%`}
                                            objectFit='cover'
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div 
                    className={`${styles.button} ${isShowcase ? styles.showcase : ``}`} 
                    onClick={nextSlide}
                >
                    <Image
                        src={'/Common/selectorRight.svg'}
                        width={40}
                        height={20}
                    />
                </div>
            </div>
        </>
    )
}

export default Carousel;

