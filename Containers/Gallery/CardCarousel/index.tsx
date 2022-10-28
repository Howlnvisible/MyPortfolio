import Carousel from "../../../Components/Carousel";
import CommonCard from "../../../Components/CommonCard";
import styles from './CardCarousel.module.scss';

type CardCarouselProps = {
    cardCarouselItems: any;
    selected: any;
    setSelected: any;
    windowDimension?: any;
}
const CardCarousel = ({
    cardCarouselItems,
    selected,
    setSelected,
    windowDimension
}: CardCarouselProps) => {
    return (
        <div className={`${styles.container} ${styles.show}`}>
            <CommonCard
                src={selected.src}
                title={selected.title}
                windowDimension={windowDimension}
                isShowcase
            >
                {selected.children}
            </CommonCard>
            <Carousel
                cardCarouselItems={cardCarouselItems}
                selected={selected}
                setSelected={setSelected}
                isShowcase
            />
        </div>
    )
}

export default CardCarousel;